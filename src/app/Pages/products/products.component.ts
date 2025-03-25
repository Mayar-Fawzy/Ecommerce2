import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { CardTypeComponent } from '../../components/card-type/card-type.component';
import { ProductsService } from '../../core/Services/products.service';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Slider } from 'primeng/slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [FormsModule, Select, CardTypeComponent,PaginatorModule, ButtonModule, DividerModule, FormsModule],
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
   private readonly _ProductsService=inject(ProductsService)
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
  //pagination
  first1: number = 0;
  rows1: number = 10;
  totalRecords: number = 9620; // العدد الكلي للنتائج كما في الصورة

  onPageChange1(event: any) {
    console.log("🚀 Page Change Event:", event); // ✅ لمعرفة القيم التي يتم تمريرها
    this.first1 = event.first;
    this.loadPageData(event.page);
  }
  

  loadPageData(page: number) {
    // هنا تضمن كود جلب البيانات للصفحة المطلوبة
  this._ProductsService.pagination(page).subscribe(res=>{
    this.productss=res.products;
  })
  }
}