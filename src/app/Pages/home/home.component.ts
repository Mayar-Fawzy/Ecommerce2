import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTvComponent } from "../../components/card-tv/card-tv.component";
import { CardTypeComponent } from "../../components/card-type/card-type.component";
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardTvComponent, CardTypeComponent,RoutingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedCategory: string = 'tv'; // الفئة الافتراضية

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
