import { Component, EventEmitter, Output } from '@angular/core';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';


@Component({
  selector: 'app-navbar',
  imports: [RoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

 
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
