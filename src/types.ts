export interface IProduct{
  "id": number,
  "category": string,
  "brand": string,
  "model": string,
  "description": string,
  "price": number,
  "stock": number,
  "img1": string[],
  "img2": string[],
}

export interface IDataProducts{
  limit: number,
  products: IProduct[],
  skip: number,
  total: number,
}

export enum DataKeys{
  brand = 'brand',
  category = 'category',
  price = 'price',
  stock = 'stock',
}