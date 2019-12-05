package net.guides.springboot2.crud.repository;

import net.guides.springboot2.crud.model.Booking;
import net.guides.springboot2.crud.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

}
