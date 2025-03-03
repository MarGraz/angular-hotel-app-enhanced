import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})

// Implement OnInit to perform the validation
export class ReservationFormComponent implements OnInit {
  // New empty form group, it will be populated using FormBuilder
  reservationForm: FormGroup = new FormGroup({});

  // It will be invoked every time this component is instantiated
  // and it get all the parameters in Dependency Injection
  constructor(
    private formBuilder: FormBuilder, 
    private reservationService: ReservationService,
    private router: Router) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
  }

  // Method triggered when the form is submitted
  onSubmit() {
    if (this.reservationForm.valid) {

      // OnSubmit get the reservation from the reservationForm
      let reservation: Reservation = this.reservationForm.value;

      // The reservationService is passed in DI from the component constructor
      // Create the reservation
      this.reservationService.addReservation(reservation);

      // After the user added a reservation, the user will be redirected to the reservation list
      this.router.navigate(['/list']);
    }
  }
}
