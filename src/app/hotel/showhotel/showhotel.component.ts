import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Country} from '../../country';
import {BookingService} from '../../booking.service';
import {Booking} from '../../booking';

@Component({
  selector: 'app-showhotel',
  templateUrl: './showhotel.component.html',
  styleUrls: ['./showhotel.component.scss']
})
export class ShowhotelComponent implements OnInit {
  

  private countries:Country[];
  private oneCountry:Country;

  constructor(private _countryService:CountryService,private route:ActivatedRoute) {
    
  }


    ngOnInit() {
      
    }

    readCountries(id:string){
      this._countryService.readOneCountry(id).subscribe(
        data=>{
          
          this.oneCountry = data['msg'];
          console.log(this.oneCountry);
        },
        error=>{
          console.log(error);
        }
      )
    }
    
}
