import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) {}

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
    }
  }
}
