import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopService } from '../../shop.service';
import { newPublish } from '../../interface/cart';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  constructor(private shopService:ShopService){}

  form = new FormGroup({
    title: new FormControl('', [Validators.minLength(5), Validators.maxLength(25), Validators.required]),
    description: new FormControl('', Validators.maxLength(250)),
    price: new FormControl('0.00'),
    quantity: new FormControl('', Validators.required),
    preferences: new FormControl(''),
    category: new FormControl(''),
    image:new FormControl('')
  });

  get titleControl(): FormControl{
    return this.form.get('title') as FormControl;
  }

  get quantityControl():FormControl{
    return this.form.get('quantity') as FormControl;
  }



  addProduct(): void{
    const product = this.form.value
    console.log(product)
    const publish = {

     title: this.form.value.title,
     price:this.form.value.price,
     quantity:this.form.value.quantity,
     description:this.form.value.description,
     image:this.form.value.image,
     category:this.form.value.category,
     preferences:this.form.value.preferences

    };


    this.shopService.addPublish(publish).subscribe(
      response => {
        console.log('Respuesta:', response);
        // Realiza las acciones necesarias con la respuesta recibida del servidor
      },
      error => {
        console.error('Error:', error);
        // Maneja los errores de la petición POST
      }
    );
  }

}
