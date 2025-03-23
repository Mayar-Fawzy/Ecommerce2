import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTvComponent } from "../../components/card-tv/card-tv.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardTvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
