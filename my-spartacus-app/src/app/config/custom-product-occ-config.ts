import { OccConfig } from "@spartacus/core";



export const customProductOccConfig: OccConfig={
    backend: {
        occ: {
            endpoints: {
                product: {
                    default:
                            'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
                    details:
                            'products/${productCode}?fields=averageRating,stock(DEFAULT),description,availableForPickup,code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,images(FULL)',
                    
                }
               
            }
        }
    }
}