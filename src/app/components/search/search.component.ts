import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/Services/products.service';
import { CommonModule } from '@angular/common';
import { CutPipe } from "../../core/Pipes/cut.pipe";
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';

@Component({
  selector: 'app-search',
  imports: [CommonModule, CutPipe,RoutingModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string | null = '';
  filteredProducts: any[] = [];
  products: any[] = [];
  
  private readonly _ProductsService = inject(ProductsService);
  
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe(
      res => {
        this.products = res.products;
        this.filterProducts(); // تصفية المنتجات عند جلبها
      }
    );
  }
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.searchTerm = params['query'] || '';
      this.filterProducts(); // تصفية المنتجات عند تغيير معامل البحث
    });
  }
  
  filterProducts() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.filteredProducts = [];
      return;
    }
  
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product => 
      product.brand.toLowerCase().includes(searchTermLower)
    );
  }
  
  isPopupVisible: boolean = true;

  closePopup() {
    this.isPopupVisible = false;
    this.searchTerm = '';  // إخفاء البوب أب مباشرة
  }
}
