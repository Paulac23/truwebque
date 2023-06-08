import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { resProduct } from '../../interface/resProduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  id=0;
  productTitle="producto  ";
  productDescription="descripcion";
  productImage="foto";
  productState?:boolean;
  productId?: number;


  constructor(private shopService:ShopService,private route: ActivatedRoute ){}

  ngOnInit() :void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
      this.shopService.getProductById(this.id).subscribe((res:any) => {
      this.productTitle = res.titulo
      this.productDescription = res.descripcion
      this.productImage= res.foto
      this.productState= res.estado

      console.log(res)
    })
  }
}
