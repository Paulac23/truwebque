export interface Cart {
  id:       number;
  userId:   number;
  date:     Date;
  products: Products[];
}

interface Products {
  productId: number;
  quantity:  number;
}
