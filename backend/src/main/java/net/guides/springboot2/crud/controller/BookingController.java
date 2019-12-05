package net.guides.springboot2.crud.controller;

import net.guides.springboot2.crud.exception.ResourceNotFoundException;
import net.guides.springboot2.crud.model.Booking;
import net.guides.springboot2.crud.repository.BookingRepository;
import net.guides.springboot2.crud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;
    private UserRepository userRepository;

    @GetMapping("/bookings")
    public List<Booking> getAllBookings() {return bookingRepository.findAll();}

    @GetMapping("/users/{id}/allBookings")
    public List<Booking> getAllBookingsByUserId(@PathVariable(value = "id") Long userId){
        List<Booking> bookings = new ArrayList<>();
        bookingRepository.findAll().forEach(bookings::add);
        for(int i = 0; i < bookings.size(); i++){
            if(bookings.get(i).getUserId() != userId){
                bookings.remove(i);
            }
        }
        return bookings;
    }



    @GetMapping("/bookings/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable(value = "id") Long bookingId) throws ResourceNotFoundException {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found by this id ::" + bookingId));
        return ResponseEntity.ok().body(booking);
    }

    @PostMapping("/bookings")
    public Booking createBooking(@Valid @RequestBody Booking booking){return bookingRepository.save(booking);}

    @PutMapping("/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable(value = "id") Long bookingId,
                                                 @Valid @RequestBody Booking bookingDetails) throws ResourceNotFoundException {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found for this id ::" + bookingId));
        booking.setFirstName(bookingDetails.getFirstName());
        booking.setLastName(bookingDetails.getLastName());
        booking.setPhone(bookingDetails.getPhone());
        booking.setNrOfSeats(bookingDetails.getNrOfSeats());
        booking.setBookingHour(bookingDetails.getBookingHour());
        final Booking updatedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/bookings/{id}")
    public Map<String, Boolean> deleteBooking(@PathVariable(value = "id") Long bookingId)
        throws ResourceNotFoundException {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found by this id ::" + bookingId));
        bookingRepository.delete(booking);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
