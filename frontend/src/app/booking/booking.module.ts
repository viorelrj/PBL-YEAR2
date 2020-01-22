import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';

import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';


@NgModule({
  declarations: [BookingComponent, BookingListComponent],
  imports: [
    CommonModule,
    FormsModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
