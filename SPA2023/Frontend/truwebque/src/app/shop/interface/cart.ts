export interface Cart {
  id:       number;
  userId:   number;
  date:     Date;
  products: Products[];
}

export interface Products {
  productId: number;
  quantity:  number;
}

export interface singleProduct{
  title:string;
  price:number;
  category:string;
  description:string;
  image:string;
}

export interface responseProd{
  id:       number;
  title:string;
  price:number;
  quantity:number;
  description:string;
  image:string;
}

export interface newPublish{
  title?:string;
  price?:number;
  quantity?:number;
  description?:string;
  image?:string;
  category?:string;
  preferences?:string;
}
