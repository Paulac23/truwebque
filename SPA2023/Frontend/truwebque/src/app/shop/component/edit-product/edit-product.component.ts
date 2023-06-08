import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  id!:number;
  productTitle="producto  ";
  productDescription="descripcion";
  productImage="foto";
  productState?:boolean;
  productId?: number;

  constructor(private shopService:ShopService,private route: ActivatedRoute ){}
  currentItem:any;

  ngOnInit() :void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

     this.shopService.getProductById(this.id).subscribe((res:any) => {
      this.productTitle = res.titulo
      this.productDescription = res.descripcion
      this.productImage= res.foto
      this.productState= res.estado

      this.currentItem=res;

    });

    })
  }


}
