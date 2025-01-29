import { PrimaryButtonComponent } from './../../../components/primary-button/primary-button.component';
import { ButtonComponent } from './../../../components/button/button.component';
import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
   <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
     <h2 class="text-2xl">Order Summary</h2>
     <div class="flex flex-col gap-4">
      <div class="flex gap-4 mt-2">
        <span class="text-lg">Total</span>
        <span class="text-lg font-bold">{{'Rs.'+ total()}} </span>
      </div>
      <app-primary-button label="Proceed to Checkout"/>
     </div>
   </div>
  `,
  styles: ``
})

export class OrderSummaryComponent {

  cartService = inject(CartService);

  total = computed(() =>{
    let total = 0;
    for(const item of this.cartService.cart()){
      total += item.price;
    }
    return total;
  })
}
