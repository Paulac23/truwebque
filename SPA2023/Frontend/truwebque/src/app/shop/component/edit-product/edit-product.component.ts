import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{


  productTitle="producto";
  productDescription="descripcion";
  productImage="foto";
  productState?:boolean;
  productId?: number;
  isLoading:boolean=false;
  exist:boolean=false;

  constructor(private shopService:ShopService,private route: ActivatedRoute, private activatedRoute: ActivatedRoute ){}
  currentItem:any;
  id:number | undefined;

  ngOnInit() :void {
    this.isLoading=true
     this.route.params.subscribe(params => {
      this.id = +params['id'];

     this.shopService.getProductById(this.id).subscribe({
      next:(res:any) => {
      this.productId=res.id_publicacion
      this.productTitle = res.titulo
      this.productDescription = res.descripcion
      this.productImage= res.foto
      this.productState= res.estado
      this.currentItem=res;
      this.exist=true;
      this.isLoading=false;
    },
    error: (err) => {
      console.log(err);
      this.isLoading=false;
      this.exist=false;
    }
   } );

    })
  }


}
