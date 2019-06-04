import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FilterPipe } from './filter.pipe';
import { environment } from '../environments/environment';

import {AgmCoreModule} from '@agm/core';

import { HotelComponent } from './hotel/hotel.component';
import { HoteldashComponent } from './hotel/hoteldash/hoteldash.component';
import { ShowhotelComponent } from './hotel/showhotel/showhotel.component';
import { RoomdashComponent } from './rooms/roomdash/roomdash.component';
import { ShowroomComponent } from './rooms/showroom/showroom.component';
import { BookingformComponent } from './bookingform/bookingform.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HotelComponent,
    HoteldashComponent,
    ShowhotelComponent,
    RoomdashComponent,
    ShowroomComponent,
    BookingformComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA5XkTRkqgOXU22mRkLHf6uIZld8Mh0nC8'

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
