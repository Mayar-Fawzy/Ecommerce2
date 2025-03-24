import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    if (!products || !searchText) {
      return products;
    }

    searchText = searchText.toLowerCase();
    return products.filter(product =>
      product.brand.toLowerCase().includes(searchText)
    );
  }
}
