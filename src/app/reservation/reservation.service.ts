import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

// Injectable ia a decorator that means this service will be available in dependency injection
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  private reservations: Reservation[] = [];

  // CRUD operations on our Reservation

  // Get list
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Get single reservation
  // Can return also undefined
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  // Create single reservation
  addReservation(reservation: Reservation): void {
    
    // Set an unique ID
    reservation.id = Date.now().toString();
    
    // Add the reservation to the property array
    this.reservations.push(reservation);
  }

  // Delete single reservation
  deleteReservation(id: string): void {
    // First get the element by id
    let index = this.reservations.findIndex(res => res.id === id);

    // Delete the found element, only 1 element will be removed
    this.reservations.splice(index, 1);
  }

  // Update single reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
     // First get the element by id
     let index = this.reservations.findIndex(res => res.id === id);

     // Overwrite the reservation using the index
     this.reservations[index] = updatedReservation;
  }
}
