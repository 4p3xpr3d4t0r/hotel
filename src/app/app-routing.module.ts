import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoteldashComponent } from './hotel/hoteldash/hoteldash.component';
import { ShowhotelComponent } from './hotel/showhotel/showhotel.component';

import { RoomdashComponent } from './rooms/roomdash/roomdash.component';
import { ShowroomComponent } from './rooms/showroom/showroom.component';


import { BookingformComponent } from './bookingform/bookingform.component';
const routes: Routes = [
  { path: 'bookingform', component: BookingformComponent },

  { path: 'roomdash', component: RoomdashComponent },
  { path: 'viewroom', component: ShowroomComponent},

  { path: 'hoteldash', component: HoteldashComponent },
  { path: 'showhotel', component: ShowhotelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule { }
