import { Component, Input, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../core/Services/products.service';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CardTypeComponent implements OnInit, OnChanges {
  @Input() category: string = '';
  @Input() productsPages: any[] = [];
  searchText: string = ''; 
  private productsService = inject(ProductsService);
  products: any[] = [];
  errorMessage: string | null = null;
  onSale: { [key: string]: boolean } = {}; // تتبع حالة التخفيض لكل منتج

  ngOnInit(): void {
    if (this.category) {
      this.fetchProducts();
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && changes['category'].currentValue !== changes['category'].previousValue) {
      console.log(`📢 تغيير الفئة إلى: ${this.category}`);
      this.fetchProducts();
    }
  }

  private fetchProducts(): void {
    if (!this.category) {
      this.setError('⚠️ Category is not specified.');
      return;
    }

    console.log(`📡 جلب المنتجات للفئة: ${this.category}`);

    this.productsService.getProductsType(this.category).subscribe({
      next: (res) => {
        this.products = res?.products.slice(0, 9) ?? [];
        this.errorMessage = this.products.length ? null : '❌ No products found for this category.';
        this.onSale = {}; // إعادة تعيين التخفيض عند تغيير الفئة
        console.log('📦 المنتجات المحملة:', this.products);
      },
      error: () => this.setError('🚨 Error fetching products. Please try again later.')
    });
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.products = [];
    console.error(message);
  }

  toggleProductDetails(productId: string): void {
    this.onSale[productId] = !this.onSale[productId];
    console.log(`🛒 المنتج [${productId}] حالته الآن: ${this.onSale[productId] ? '🎉 مُخفض!' : '🔙 غير مُخفض'}`);
  }
}
