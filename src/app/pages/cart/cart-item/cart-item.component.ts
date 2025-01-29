import { Component, input } from '@angular/core';
import { Product } from '../../../components/products.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img [src]="item().image" alt="image" class="w-[50px] h-[50px] object-contain">
      <div class="flex flex-col">
        <span class="text-md font-bold">{{item().title}} </span>
        <span class="text-sm">{{ 'Rs.' + item().price}} </span>
      </div>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>()
}
