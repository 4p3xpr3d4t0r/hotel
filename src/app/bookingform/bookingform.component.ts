import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {BookingService} from '../booking.service';
import {Booking} from '../booking';


@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  private booking:Booking;

  constructor(private formBuilder: FormBuilder,private bookingService:BookingService,private router:Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        'firstname': ['', Validators.required],
        'lastname': ['', Validators.required],
        'address': ['', Validators.required],
        'nicno': ['', Validators.required],
        'date': [],
        phoneno: ['',Validators.required],
      }
    );

    this.bookingService.setter(new Booking);
    this.booking = this.bookingService.getter();
  }

  createOrUpdate(){
    this.bookingService.createBooking(this.booking).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/hoteldash']);
      },
      error => {
        console.log(error);
      }
    )
  }
  
}
