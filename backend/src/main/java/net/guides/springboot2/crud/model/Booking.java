package net.guides.springboot2.crud.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@AttributeOverride(name = "id", column = @Column(name = "ID"))
@Table(name = "booking")
public class Booking implements Serializable {
    private long id;
    private long restaurantId;
    private long userId;
    private String firstName;
    private String lastName;
    private String phone;
    private int nrOfSeats;
    private String bookingHour;

    public Booking(){

    }

    public Booking(Long restaurantId, Long userId, String firstName, String lastName, String phone, Integer nrOfSeats, String bookingHour){
        this.restaurantId = restaurantId;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.nrOfSeats = nrOfSeats;
        this.bookingHour = bookingHour;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    @Column(name = "Restaurant_ID", nullable = false)
    public long getRestaurantId() { return restaurantId; }
    public void setRestaurantId(long restaurantId) { this.restaurantId = restaurantId; }

    @Column(name = "User_ID", nullable = false)
    public long getUserId() { return userId; }
    public void setUserId(long userId) { this.userId = userId; }

    @Column(name = "First_Name", nullable = false)
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    @Column(name = "Last_Name", nullable = false)
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    @Column(name = "Phone", nullable = false)
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    @Column(name = "Nr_of_seats", nullable = false)
    public int getNrOfSeats() { return nrOfSeats; }
    public void setNrOfSeats(int nrOfSeats) { this.nrOfSeats = nrOfSeats; }

    @Column(name = "Booking_hour", nullable = false)
    public String getBookingHour() { return bookingHour; }
    public void setBookingHour(String bookingHour) { this.bookingHour = bookingHour; }

    @Override
    public String toString(){
        return "Booking order [id=" + id + ", restaurantId=" + restaurantId + ", userId=" + userId + ", firstName="
                + firstName + ", lastName=" + lastName + ", phone=" + phone + ", nrOfSeats=" + nrOfSeats +
                ", bookingHour=" + bookingHour + "]";
    }
}
