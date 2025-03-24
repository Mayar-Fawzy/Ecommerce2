import { Component, Input, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../core/Services/products.service';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.scss'],
  standalone: true,
  imports: [CommonModule,RoutingModule]
})
export class CardTypeComponent implements OnInit, OnChanges {
  @Input() category: string = '';
  @Input() productsPages: any[] = [];
  searchText: string = ''; 
  private _Router = inject(Router);
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
  addToCart(productId: number) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // البحث عن المنتج بواسطة الـ ID
    let selectedProduct = this.products.find(p => p.id === productId);
    
    if (!selectedProduct) {
      alert('❌ المنتج غير موجود!');
      return;
    }

    // التحقق إذا كان المنتج مضافًا مسبقًا
    const exists = cart.some((item: any) => item.id === productId);
    
    if (!exists) {
      cart.push(selectedProduct); // إضافة المنتج
      localStorage.setItem('cart', JSON.stringify(cart));
      this._Router.navigate(['/cart'])
      alert('✅ تمت إضافة المنتج إلى السلة!');
    } else {
      alert('⚠️ المنتج مضاف مسبقًا!');
    }
  }
}
