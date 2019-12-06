import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingRequestModel, BookingFormRequestModel } from '../models/booking-models';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
	private apiURL = 'http://localhost:8080/api';

	constructor(
		private http: HttpClient,
	) { }

	createBooking(formObj: BookingFormRequestModel) {
		return this.http.post(
			this.apiURL + '/bookings',
			formObj
		)
	}

	getUserBookings(userId) {
		return this.http.get(
			this.apiURL + '/users/'+userId+'/allBookings',
		)
	}
}
