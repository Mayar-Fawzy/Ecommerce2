import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { CardTypeComponent } from '../../components/card-type/card-type.component';
import { ProductsService } from '../../core/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [FormsModule, Select, CardTypeComponent],
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  
  categories = [
    { category: 'tv', code: 'tv' },
    { category: 'audio', code: 'audio' },
    { category: 'laptop', code: 'laptop' },
    { category: 'mobile', code: 'mobile' },
    { category: 'gaming', code: 'gaming' },
    { category: 'appliances', code: 'appliances' },
  ];

  selectedCategory = this.categories[0]; // ✅ تحديد الفئة الافتراضية عند التشغيل
  productss: any[] = [];

  private _ProductsService = inject(ProductsService);

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    if (!this.selectedCategory || !this.selectedCategory.code) {
      console.error('⚠️ يرجى اختيار فئة صحيحة!');
      return;
    }

    this._ProductsService.getProductsType(this.selectedCategory.code).subscribe(
      (res) => {
        this.productss = res.products;
        console.log(res.productss);
      },
      (err) => {
        console.error('🚨 خطأ أثناء جلب البيانات:', err);
      }
    );
  }
}
