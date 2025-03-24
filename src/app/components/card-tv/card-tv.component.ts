import { RoutingModule } from './../../core/Shared/Module/routing/routing.module';
import { Component, inject } from '@angular/core';
import { Product } from '../../core/interfaces/Product';
import { ProductsService } from '../../core/Services/products.service';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-tv',
  imports: [ButtonModule,TagModule,CommonModule,CarouselModule,RoutingModule],
  templateUrl: './card-tv.component.html',
  styleUrl: './card-tv.component.scss'
})
export class CardTvComponent {
  
      public responsiveOptions = [
        { breakpoint: '1400px', numVisible: 4, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '575px', numVisible: 1, numScroll: 1 }
        ];
   public readonly _ProductsService=inject(ProductsService);
  
      productsList:[]=[];
      ngOnInit(): void {
          this._ProductsService.getProductsType('tv').subscribe(res=>{
              this.productsList=res.products.splice(0,7);
              console.log(this.productsList);
            
          })
      
      }
      getSeverity(status: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | undefined {
          switch (status.toLowerCase()) {
            case 'in stock':
              return 'success';
            case 'low stock':
              return 'warn'; // Updated to match allowed severity types
            case 'out of stock':
              return 'danger';
            default:
              return 'info'; // Default to "info" for unknown statuses
          }
        }
        
  
}
