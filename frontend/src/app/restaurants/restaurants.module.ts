import { NgModule } from '@angular/core';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [ListComponent, ItemComponent, BookingComponent, IndexComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ]
})
export class RestaurantsModule { }
