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
  private productsService = inject(ProductsService);
  products: any[] = [];
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']?.currentValue !== changes['category']?.previousValue) {
      this.fetchProducts();
    }
  }

  private fetchProducts(): void {
    if (!this.category) {
      this.setError('Category is not specified.');
      return;
    }

    this.productsService.getProductsType(this.category).subscribe({
      next: (res) => {
        this.products = res?.products.slice(0,9) ?? [];
        this.errorMessage = this.products.length ? null : 'No products found for this category.';
      },
      error: () => this.setError('Error fetching products. Please try again later.')
    });
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.products = [];
    console.error(message);
  }

  get filteredProducts() {
    return this.products.filter(product => product.category === this.category);
  }
  onSale:boolean=true
  toggleProductDetails(product: any): void {
    // تبديل حالة التخفيض للمنتج المحدد
    this.onSale = !this.onSale;
    
    // يمكنك هنا إضافة المزيد من المنطق مثل فتح صفحة تفاصيل المنتج
    console.log('تم النقر على المنتج:', product);
  }
}