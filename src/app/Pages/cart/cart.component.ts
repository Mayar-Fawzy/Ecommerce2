import { RoutingModule } from './../../core/Shared/Module/routing/routing.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CutPipe } from '../../core/Pipes/cut.pipe';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, CutPipe,RoutingModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: any[] = [];

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  increaseQuantity(item: any) {
    item.quantity = (item.quantity || 1) + 1;
    this.updateCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getSubtotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  getTotal(): number {
    return this.getSubtotal() + 10; // إضافة قيمة افتراضية للشحن
  }
}
