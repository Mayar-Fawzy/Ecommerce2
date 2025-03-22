import { Component } from '@angular/core';
import { FooterComponent } from "../Layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Layout/navbar/navbar.component';

@Component({
  selector: 'app-routes',
  imports: [FooterComponent,RouterOutlet,NavbarComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

}
