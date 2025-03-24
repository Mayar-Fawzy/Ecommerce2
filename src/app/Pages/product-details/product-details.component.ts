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
 
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.getProductById(productId).subscribe((res: any) => {
        this.productDet = res.product;
       console.log(this.productDet.image);
      });
    }
  }
}
