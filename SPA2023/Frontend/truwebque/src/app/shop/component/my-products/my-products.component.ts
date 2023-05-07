import { Component } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {

  articulo:string="puerta";
  cantidad:number=1;



  deleted=false;
  deleteItem(){
    this.deleted=true;
    setTimeout(()=>{
    this.deleted=false;
    }, 5000);
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
