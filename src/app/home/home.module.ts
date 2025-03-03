import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    HomeComponent // To use the home component (like the navigation menu), in other components
  ]
})
export class HomeModule { }
