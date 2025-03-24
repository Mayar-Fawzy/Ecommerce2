import { Component, EventEmitter, Output } from '@angular/core';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RoutingModule,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  constructor(private router: Router) {}

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    
    if (searchTerm) {
      this.router.navigate([{ outlets: { popup: ['search-popup', { query: searchTerm }] } }]);
    } else {
      this.router.navigate([{ outlets: { popup: null } }]); // Close popup if empty
    }
  }
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
