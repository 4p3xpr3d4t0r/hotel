import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Booking} from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private booking:Booking;
  private baseUri:string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createBooking(booking:Booking){
    return this.http.post(this.baseUri+"/booking",booking,{headers:this.headers});
  }

  setter(booking:Booking){
    this.booking = booking;
  }

  getter(){
    return this.booking;
  }
}
