import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {Country} from '../../country';

@Component({
  selector: 'app-hoteldash',
  templateUrl: './hoteldash.component.html',
  styleUrls: ['./hoteldash.component.scss']
})
export class HoteldashComponent implements OnInit {
  private countries:Country[];
  constructor(private _countryService:CountryService) {}
     
     ngOnInit() {
      this.readCountries();
    }
    
    readCountries(){
      this._countryService.readCountries().subscribe(
        data=>{
          console.log(data);
          this.countries = data['msg'];
        },
        error=>{
          console.log(error);
        }
      )
    }
}

