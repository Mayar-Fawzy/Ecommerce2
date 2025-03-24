import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/Services/products.service';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { CutPipe } from "../../core/Pipes/cut.pipe";

@Component({
  selector: 'app-product-details',
   imports: [GalleriaModule, FormsModule, CutPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
 
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductsService);

  productDet: any;
  images: any[] = [];
  position: string = 'left';

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.getProductById(productId).subscribe((res: any) => {
        this.productDet = res.product;

        // 🖼️ إعداد الصور للمعرض
        this.images = [
          { itemImageSrc: this.productDet.image, thumbnailImageSrc: this.productDet.image }
        ];
      });
    }
  }
}
