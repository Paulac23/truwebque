import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products:any[] = [];
  isEmpty:boolean = false;

  constructor(private shopService:ShopService, private router: Router){}

  ngOnInit() :void {

    this.shopService.getProducts().subscribe({
      next:(res: any) => {
      this.products = res;
      localStorage.setItem('ultimaPeticion', Date.now().toString());
      this.checkLastRequest()
    },
    error:(err: any) => {
      console.log(err.status)
      this.isEmpty = true
      },
      complete:() => {console.log("complete")}
      })
  };


  publishById(id:number): void{
    this.router.navigate(['/shop/product/', id]);
  }

  // Obtener la marca de tiempo actual
marcaDeTiempoActual = Date.now();

// Obtener la última marca de tiempo almacenada
ultimaPeticion = localStorage.getItem('ultimaPeticion');
marcaDeTiempoUltimaPeticion = parseInt(this.ultimaPeticion!);

checkLastRequest() {
// Verificar si ha pasado menos de 10 minutos
if (this.marcaDeTiempoActual - this.marcaDeTiempoUltimaPeticion < 10 * 60 * 1000) {
  // Se hizo la misma petición en los últimos 10 minutos
  console.log('Ya se realizó la misma petición en los últimos 10 minutos.');
} else {
  // No se hizo la misma petición en los últimos 10 minutos
  console.log('Es una nueva petición.');
  // Actualizar la marca de tiempo en el localStorage
  localStorage.setItem('ultimaPeticion', this.marcaDeTiempoActual.toString());
}
}
}
