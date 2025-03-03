import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

// Injectable ia a decorator that means this service will be available in dependency injection
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  private reservations: Reservation[] = [];

  constructor(){

    // The constructor is loaded before the ngOnInit (that is implemented in our component), this give us the possibility to load first all the reservqtions from the memory
   let savedReservations = localStorage.getItem("reservations");

   // Save the in memory reservations inside the local reservations property
   this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

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

    // Save the reservations array (overwrite it) inside the browser localStorage, to keep elements in memory also after a refresh/reboot
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  // Delete single reservation
  deleteReservation(id: string): void {
    // First get the element by id
    let index = this.reservations.findIndex(res => res.id === id);

    // Delete the found element, only 1 element will be removed
    this.reservations.splice(index, 1);

    // Save the reservations array (overwrite it) inside the browser localStorage, to keep elements in memory also after a refresh/reboot
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  // Update single reservation
  updateReservation(updatedReservation: Reservation): void {
     // First get the element by id
     let index = this.reservations.findIndex(res => res.id === updatedReservation.id);

     // Overwrite the reservation using the index
     this.reservations[index] = updatedReservation;

     // Save the reservations array (overwrite it) inside the browser localStorage, to keep elements in memory also after a refresh/reboot
     localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
