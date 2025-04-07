import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  // Get from DI the reservation service
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    // The ngOnInit is executed after the service, where the reservations are retrieved from the browser memory
    this.reservationService.getReservations().subscribe( reservationsResult => { // Now we have an Observable, an async method, so we need to subscribe to get the result
      this.reservations = reservationsResult
    }); 
  }

  deleteReservation(id: string){
    // Call the service to delete a reservation
    this.reservationService.deleteReservation(id).subscribe(() => { // The mocked API returns void, but in our lambda function we want to return a text
      console.log("Delete request processed") // Of course this will not delete the record in the UI, just print a log in the console
    });
  }
}
