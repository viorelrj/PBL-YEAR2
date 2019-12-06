import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../core/services/authentification.service';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
	id: String;

	constructor(
		private route: ActivatedRoute,
		private authService: AuthentificationService,
		private bookingService: BookingService,
		private router: Router
	) { }

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get("id");
		console.log(this.id);
	}

	onSubmit(f: NgForm) {
		let request = f.value;
		let userId = this.authService.getSessionUserId();
		request.restaurantId = this.id;
		request.bookingHour = request.bookingDay + ' ' + request.bookingHour;
		delete request.bookingDay;
		request.userId = userId;

		console.log(request);
		
		this.bookingService.createBooking(request)
		.subscribe(data => this.router.navigate(['user', userId, 'bookings']))
	}
}
