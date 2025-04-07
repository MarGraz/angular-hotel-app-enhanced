import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    // In case the user visit the "edit" route, it catch the id in the route
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // If an id is present, this is a reservation EDIT, and it's necessary to fill the form with stored data
    if (id) {
      // Retrieve the reservation to edit --> Now is returned by Mockoon app (mocked API)
      this.reservationService.getReservation(id).subscribe(reservationToEdit => {

        if (reservationToEdit)
          // Fill the form with the reservation data retrieved
          this.reservationForm.patchValue(reservationToEdit);
      });
    }
  }

  // Method triggered when the form is submitted
  onSubmit() {
    if (this.reservationForm.valid) {
      // OnSubmit get the reservation from the reservationForm
      let reservation: Reservation = this.reservationForm.value;

      // In case the user visit the "edit" route, it catch the id in the route
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      // If an id is present, this is a reservation EDIT request
      if (id) {
        // Reservation UPDATE
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("Update request processed")  // Because of the mock it just print the update in the console
        });
      } else {
        // Reservation CREATION (New)
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Create request processed")  // Because of the mock it just print the update in the console
        });
      }
      // After the user added a reservation, the user will be redirected to the reservation list
      this.router.navigate(['/list']);
    }
  }
}
