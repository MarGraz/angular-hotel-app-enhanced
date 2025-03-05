import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'list', component: ReservationListComponent }, // Reservation List route
  { path: 'new', component: ReservationFormComponent }, // New Reservation route
  { path: 'edit/:id', component: ReservationFormComponent }, // Edit a reservation, we use always the formComponent for the edit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
