import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [UserComponent, OrdersComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
