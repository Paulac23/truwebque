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
  isEmpty:boolean = false;
isLoading:boolean = false;
  constructor(private shopService:ShopService, private router: Router){}

  ngOnInit() :void {
    this.isLoading=true;
    this.shopService.getProducts().subscribe({
      next:(res: any) => {
      this.products = res;
      this.isLoading=false;
    },
    error:(err: any) => {
      console.log(err.status)
      this.isEmpty = true
      this.isLoading=false;
      }
    })
  };


  publishById(id:number): void{
    this.router.navigate(['/shop/product/', id]);
  }


}
