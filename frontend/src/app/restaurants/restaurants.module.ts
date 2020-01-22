import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RestaurantsComponent } from './restaurants.component';


@NgModule({
  declarations: [ListComponent, ItemComponent, RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
  ],
  exports: [
    ListComponent
  ]
})
export class RestaurantsModule { }
