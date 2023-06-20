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
  isLoading:boolean=false;
  constructor(private shopService:ShopService, private router: Router){}

  ngOnInit() :void {
    this.obtenerPublicaciones();
    this.isLoading = true;
  }

  noProducts:boolean=false;

  obtenerPublicaciones(){
    this.shopService.getMyProducts().subscribe({
      next: (res:any) => {
        this.products = res
        this.noProducts = this.products.length? false : true;
        this.isLoading = false;
      },
      error: (err:any) => {
        this.noProducts = true;
        this.products = [];
        this.isLoading = false;
        alert("Ocurrio un problema al intentar cargar las publicaciones.")
      }

    }
    )
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
