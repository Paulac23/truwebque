import { Component } from '@angular/core';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  //valueResponse(respuesta) {
    //alert(respuesta);
  // }
  added:Boolean=false;
  deleted:Boolean=false;
  constructor(private shopService:ShopService){}

   recibiRespuesta(res:any){
    console.log(res)
    this.shopService.addPublish(res).subscribe(
      response => {
        this.added=true;
        setTimeout(()=>{
        this.added=false;
        }, 3000);
      },
      error => {
        this.deleted=true;
        setTimeout(()=>{
          this.deleted=false;
          }, 3000);
        console.log(error.error.publicante)
      }
    );
   }
}
