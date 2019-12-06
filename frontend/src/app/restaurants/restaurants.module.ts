import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, ItemComponent, BookingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ]
})
export class RestaurantsModule { }
