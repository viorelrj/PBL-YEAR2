package net.guides.springboot2.crud.repository;

import net.guides.springboot2.crud.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    Booking findAllByUserId(Long userId);
}
