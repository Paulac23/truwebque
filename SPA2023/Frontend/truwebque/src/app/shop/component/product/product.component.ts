import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { resProduct } from '../../interface/resProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  productTitle="";
  productDescription="";
  productImage="";
  productPrice=0;
  productRating=0.0;
  productId:number=1;

  constructor(private shopService:ShopService){}

  ngOnInit() :void {
    this.shopService.getProductById(this.productId).subscribe((res:any) => {
      this.productTitle = res.title
      this.productDescription = res.description
      this.productImage= res.image
      this.productPrice= res.price
      this.productRating= res.rating.rate
      console.log(res)
    })
  }
}
