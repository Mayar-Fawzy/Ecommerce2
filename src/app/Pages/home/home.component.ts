import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardproductComponent } from '../../components/cardproduct/cardproduct.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CardproductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
