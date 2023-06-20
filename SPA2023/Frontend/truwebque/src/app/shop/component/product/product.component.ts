import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { resProduct } from '../../interface/resProduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id = 0;
  productTitle!: string;
  productDescription!: string;
  productImage!: string;
  productState!: boolean;
  productId!: number;
  productDate!: Date;
  exist:boolean=true;
  isLoading:boolean=true;

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    if (this.id) {
      this.shopService.getProductById(this.id).subscribe({
        next: (res: any) => {
          this.isLoading=false;
          this.exist=true;
          this.productTitle = res.titulo;
          this.productDescription = res.descripcion;
          this.productImage = res.foto;
          this.productState = res.estado;
          this.productDate = res.fecha_publicacion;
        },
        error: (err) => {
          console.log(err.status);
          this.exist=false;
          this.isLoading=false;
        },
        complete: () => {},
      });
    }
  }
}
