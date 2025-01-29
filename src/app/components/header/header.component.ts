import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from './../primary-button/primary-button.component';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button class="text-xl" routerLink="/">My Store at 51:00</button>
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
        />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  cartService = inject(CartService);
}
