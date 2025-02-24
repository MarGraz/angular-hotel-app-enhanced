import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  // New empty form group, it will be populated using FormBuilder
  reservationForm: FormGroup = new FormGroup({});

  // Method triggered when the form is submitted
  onSubmit() {

  }

}
