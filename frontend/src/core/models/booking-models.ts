export interface BookingRequestModel {
	restaurantId: number;
	userId: number,
	firstName: String,
	lastName: String,
	phone: String,
	nrOfSeats: number,
	bookingHour: String
}

export interface BookingFormRequestModel {
	firstName: String,
	lastName: String,
	phone: String,
	nrOfSeats: number,
	bookingHour: String,
	bookingDay: String
}