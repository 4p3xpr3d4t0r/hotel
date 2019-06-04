import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;


  constructor(private formBuilder: FormBuilder) { }

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
  }
}
