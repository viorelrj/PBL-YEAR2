import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../core/services/booking.service';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
	id: String;
	bookingList: any;

	constructor(
		private route: ActivatedRoute,
		private bookingService: BookingService
		) { }

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get("id");
		this.bookingService.getUserBookings(this.id)
		.subscribe(data => {
			console.log(data)
			this.bookingList = data
		})
	}

}
