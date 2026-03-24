import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthConfigService, AuthHttpHeaderService, AuthInterceptor } from "@spartacus/core";
import { Observable, take, of, map, switchMap, catchError, EMPTY } from "rxjs";


@Injectable({providedIn: 'root'})
export class CustomAuthInterceptor extends AuthInterceptor implements HttpInterceptor{
    constructor(
    protected override authHttpHeaderService: AuthHttpHeaderService,
    protected override authConfigService: AuthConfigService
    ){
        super(authHttpHeaderService,authConfigService)
    }

    override intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const shouldCatchError =
      this.authHttpHeaderService.shouldCatchError(httpRequest);
    const shouldAddAuthorizationHeader =
      this.authHttpHeaderService.shouldAddAuthorizationHeader(httpRequest);

    const token$ = shouldAddAuthorizationHeader
      ? // emits sync, unless there is refresh or logout in progress, in which case it emits async
        this.authHttpHeaderService.getStableToken().pipe(take(1))
      : of(undefined);
    const requestAndToken$ = token$.pipe(
      map((token) => ({
        token,
        request: this.authHttpHeaderService.alterRequest(httpRequest, token),
      }))
    );
    // adding console log here for the custom interceptor which will intercept all the api call 
    // same we can add for all the other interceptor if we want to call 
    console.log("this is our custom interceptor");

    return requestAndToken$.pipe(
      switchMap(({ request, token }) =>
        next.handle(request).pipe(
          catchError((errResponse: any) => {
            switch (errResponse.status) {
              case 401: // Unauthorized
                if (this.isExpiredToken(errResponse) && shouldCatchError) {
                  // request failed because of the expired access token
                  // we should get refresh the token and retry the request, or logout if the refresh is missing / expired
                  return this.authHttpHeaderService.handleExpiredAccessToken(
                    request,
                    next,
                    token
                  );
                } else if (
                  // Refresh the expired token
                  // Check if the OAuth endpoint was called and the error is because the refresh token expired
                  this.errorIsInvalidToken(errResponse)
                ) {
                  this.authHttpHeaderService.handleExpiredRefreshToken();
                  return EMPTY;
                }
                break;
              case 400: // Bad Request
                if (
                  this.errorIsInvalidGrant(errResponse) &&
                  request.body.get('grant_type') === 'refresh_token'
                ) {
                  this.authHttpHeaderService.handleExpiredRefreshToken();
                }
                break;
            }
            throw errResponse;
          })
        )
      )
    );
  }

}