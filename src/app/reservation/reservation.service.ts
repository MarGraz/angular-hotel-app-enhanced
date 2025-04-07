import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Injectable ia a decorator that means this service will be available in dependency injection
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  private apiUrl = "http://localhost:3000" // Mockoon URL
  private reservations: Reservation[] = [];

constructor(private http: HttpClient){

}

  // CRUD operations on our Reservation

  // Get list
  getReservations(): Observable<Reservation[]> {   // Observable means async, it's an asyncronous way to wait for results 
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  // Get single reservation
  // Can return also undefined
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  // Create single reservation
  addReservation(reservation: Reservation): Observable<void> {
    
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);

    // REMOVED because now we have a mock 

    // Set an unique ID
    // reservation.id = Date.now().toString();
    
    // Add the reservation to the property array
    // this.reservations.push(reservation);
  }

  // Delete single reservation
  deleteReservation(id: string): Observable<void> {
    
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);

    // REMOVED because now we have a mock 

    // First get the element by id
    // let index = this.reservations.findIndex(res => res.id === id);

    // Delete the found element, only 1 element will be removed
    // this.reservations.splice(index, 1);
  }

  // Update single reservation
  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
    
    // REMOVED because now we have a mock 

    // First get the element by id
    // let index = this.reservations.findIndex(res => res.id === id);

     // Overwrite the reservation using the index
     // this.reservations[index] = updatedReservation;
  }
}
