import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id){
        <app-cart-item [item]="item"/>>
      }
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
