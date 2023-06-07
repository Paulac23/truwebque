import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  publish:any;

  ngOnInit(): void {

  }

  @Output () valueResponse: EventEmitter<string> = new EventEmitter();



  added:Boolean=false;
  deleted:Boolean=false;
  constructor(private shopService:ShopService){}

  form = new FormGroup({
    IsNewCheck:new FormControl(false),
    title: new FormControl('', [Validators.minLength(5), Validators.maxLength(25), Validators.required]),
    description: new FormControl('', Validators.maxLength(250)),
    price: new FormControl('0.00'),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    preferences: new FormControl('',[Validators.required]),
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

  get preferencesControl():FormControl{
    return this.form.get('preferences') as FormControl;

  }


  addProduct(): void{
    const product = this.form.value
    console.log(product)
     this.publish = {
      estado: this.form.value.IsNewCheck,
      titulo: this.form.value.title,
      descripcion:this.form.value.description,
      cantidad:this.form.value.quantity,
      //foto:this.form.value.image,
      preferencias_de_trueque:this.form.value.preferences,
      categoria:"VEHI",
      publicante:5

    }
    this.valueResponse.emit(this.publish)
    ;


   /*  this.shopService.addPublish(publish).subscribe(
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
    ); */


  }



}
