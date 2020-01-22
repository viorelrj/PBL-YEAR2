import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookingListComponent
  },
  {
    path: ':id',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
