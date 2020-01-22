import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { BookingService } from '@service/booking.service';
import { RestaurantsService } from "@service/restaurants.service";
import { AuthentificationService } from '@service/authentification.service';
import { ItemComponent } from 'app/restaurants/item/item.component';

import { ExternalPromise } from '@core/utils';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  id: String;
  bookingList: any;
  map = new ExternalPromise<any>();

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private authService: AuthentificationService,
    private restaurantService: RestaurantsService
  ) { }

  private async createMap(item) {
    let accumulator = {};
    for (let i = 0; i < item.length; i++) {
      accumulator[item.id] = {
        name: item[i].name,
        address: item[i].address
      }
    }

    this.map.resolve(accumulator);
  }

  removeBooking(index) {
    let id = this.bookingList[index].id
    this.bookingService.removeBooking(id).subscribe(() => this.fetchData());
  }

  async fetchData() {
    const map = await this.map;

    this.id = this.authService.getSessionUserId().toString();

    this.bookingService.getUserBookings(this.id)
    .subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].address = map[data.id].address,
            data[i].name = map[data.id].name
        }
        this.bookingList = data;
      }
    )
  }

  async ngOnInit() {
    const loggedIn = await this.authService.isLoggedIn();
  
    this.restaurantService.getList().subscribe(item => this.createMap(item));
    
    this.fetchData();
  }

}
