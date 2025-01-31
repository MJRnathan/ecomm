import { CartService } from './../../../services/cart.service';
import { PrimaryButtonComponent } from './../../../components/primary-button/primary-button.component';
import { Component, inject, input } from '@angular/core';
import { Product } from '../../../components/products.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
    <div class="mx-auto justify-center">
      <img [src]="product().image" class="w-[200px] h-[100px] object-contain"/>
      <div class="flex flex-col mt-2">
        <span class="text-md font-bold">{{ product().title}} </span>
        <span class="text-sm">{{ 'Rs.'+ product().price*10}} </span>
        <app-primary-button
          label="Add to Cart"
          class="mt-3"
          (btnClicked)="cartService.addToCart(product())"


        />
      </div>

      <span class="absolute top-2 right-3 text-sm font-bold"
            [class]="product().stock ? 'text-green-500' : 'text-red-500'">

        @if (product().stock){
          {{product().stock}} left.
        } @else {
          Out of Stock
        }
      </span>
    </div>
    </div>
  `,
  styles: ``
})

export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>()
}
