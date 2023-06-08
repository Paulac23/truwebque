import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnChanges{
  edditing:boolean=false;
  publish:any;
  producto:any
  @Input() itemId:any;

  ngOnChanges(): void {


    console.log(this.itemId);
    this.producto = this.itemId;


    this.rellenar()
  }

  @Output () valueResponse: EventEmitter<string> = new EventEmitter();

  added:Boolean=false;
  deleted:Boolean=false;

  rellenar(){
    this.form.get('title')?.patchValue(this.producto.titulo)
    this.form.get('description')?.patchValue(this.producto.descripcion)
    this.form.get('quantity')?.patchValue(this.producto.cantidad)
    this.form.get('preferences')?.patchValue(this.producto.preferencias_de_trueque)
    this.form.get('category')?.patchValue(this.producto.categoria)
    this.form.get('image')?.patchValue(this.producto.foto)
    this.form.get('IsNewCheck')?.patchValue(this.producto.estado)

  }


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
