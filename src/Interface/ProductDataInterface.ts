
export interface ProductDetailInterface {
    id?: string,
    title?: string,
    subtitle?: string,
    brand?: string,
    tags?: string[],
    image?: string
}

export interface ProductSalesInterface {
    "weekEnding": string,
    "retailSales": number,
    "wholesaleSales": number,
    "unitsSold": number,
    "retailerMargin": number
}