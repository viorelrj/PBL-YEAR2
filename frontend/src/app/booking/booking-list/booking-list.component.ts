import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { BookingService } from '@service/booking.service';
import { AuthentificationService } from '@service/authentification.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  id: String;
  bookingList: any;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private authService: AuthentificationService
  ) { }

  async ngOnInit() {
    const loggedIn = await this.authService.isLoggedIn();
    this.id = this.authService.getSessionUserId().toString();
    
    this.bookingService.getUserBookings(this.id)
    .subscribe(data => {
      this.bookingList = data
    })
  }

}
