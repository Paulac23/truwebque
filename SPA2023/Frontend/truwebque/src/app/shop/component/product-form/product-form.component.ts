import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopService } from '../../shop.service';

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
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    preferences: new FormControl(''),
    category: new FormControl(''),
    image:new FormControl(''),
    readCheck:new FormControl(false, Validators.requiredTrue)
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
      estado: true,
      titulo: this.form.value.title,
      descripcion:this.form.value.description,
      cantidad:this.form.value.quantity,
      //foto:this.form.value.image,
      preferencias_de_trueque:this.form.value.preferences,
      categoria:"VEHI",
      publicante:1
      //price:this.form.value.price,

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
