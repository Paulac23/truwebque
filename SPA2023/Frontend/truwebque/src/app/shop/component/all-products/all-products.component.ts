import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products:any[] = [];

  constructor(private shopService:ShopService){}

  ngOnInit() :void {
    this.shopService.getProducts().subscribe((res: any) => {
      this.products = res
    })
  }
}
