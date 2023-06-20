import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products:any[] = [];

  constructor(private shopService:ShopService, private router: Router){}

  ngOnInit() :void {
    this.shopService.getProducts().subscribe((res: any) => {
      this.products = res
    })
  }

  publishById(id:number): void{
    console.log("ruteos")
    this.router.navigate(['/shop/product/', id]);
  }

}
