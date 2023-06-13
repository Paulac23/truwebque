import { Component } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {

  idModal!:number;
  products:any[] = [];

  constructor(private shopService:ShopService, private router: Router){}

  ngOnInit() :void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(){
    this.shopService.getMyProducts().subscribe((res: any) => {
      this.products = res
      //console.log(res)
    })
  }

  publishById(id:number): void{
    console.log("ruteos")
    this.router.navigate(['/shop/product/', id]);
  }

  setId(id:number): void{
    this.idModal = id;
  }
  deleted=false;
  deleteItem(){
    this.shopService.deleteMyProductById(this.idModal).subscribe((res:any) => {
      this.deleted = true;
      console.log('publicacion borrada')
      this.obtenerPublicaciones();
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
