import { Component, inject } from '@angular/core';
import { Product } from '../../core/interfaces/Product';
import { ProductsService } from '../../core/Services/products.service';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CutPipe } from '../../core/Pipes/cut.pipe';
@Component({
  selector: 'app-cardproduct',
  imports: [CommonModule,CarouselModule,ButtonModule,TagModule],
  templateUrl: './cardproduct.component.html',
  styleUrl: './cardproduct.component.scss'
})
export class CardproductComponent {
    totalDots: number = 4; // عدد النقاط ثابت



currentPage: number = 0;


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
            // {
            //     "id": 62,
            //     "title": " Hisense 164 cm (65 inches) 4K Ultra HD Smart IPS QLED TV 65U7H (Black)",
            //     "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694158452812-81QyE0wJFYL._SL1500_.jpg",
            //     "price": 926,
            //     "description": "Resolution : 4K Ultra HD (3840x2160) | Refresh Rate : 120 Hertz | Full Array Local Dimming | Light Sensing | FreeSync & ALLM VRR Supported\r\nConnectivity: 4 HDMI ports (Ver 2.1) to connect set top box, Blu Ray players, gaming console (HDMI 1 eARC supported) | 1 USB 3.0 and 1 USB 2.0 ports to connect hard drives and other USB devices | Dual-band Wi-Fi | Bluetooth 5.1\r\nSound : 24 Watts Output | Dolby Atmos|Dolby Digital for remarkable sound quality\r\nSmart TV features: Hi View Engine | with Fire TV stick 4k | Auto Low Latency Mode for VRR | Light Sensing | FreeSync Premium | Apps : Netflix, Youtube, Prime Video etc.\r\nDisplay : 120Hz 10 bit Panel | Bezel-less Floating Display Design | ALLM |Dolby Vision, HDR10,HDR10+, HLG | 1 Billion Colours | MEMC",
            //     "brand": "Hisense",
            //     "model": "65U7H",
            //     "color": "black",
            //     "category": "tv",
            //     "popular": true,
            //     "discount": 7
            // }
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
