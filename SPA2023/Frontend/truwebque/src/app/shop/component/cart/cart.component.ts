import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Cart } from '../../interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  userId:number=4;
  name?:Cart;

  //this.name.products[0]['productId'] entra al id del product

constructor(private shopService:ShopService){}

  ngOnInit() :void {
    this.shopService.getCartById(this.userId)
    .subscribe((res) => {
      this.name=res;
      console.log(this.name.products[0]['productId'])
    })
  }



pencilFill = false;
trashFill = false;

fillPencil(){
    this.pencilFill= !this.pencilFill;
  }

fillTrash(){
  this.trashFill= !this.trashFill;
}
}
