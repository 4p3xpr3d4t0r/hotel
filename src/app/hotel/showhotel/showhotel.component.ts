import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {Router} from '@angular/router';
import {Country} from '../../country';

@Component({
  selector: 'app-showhotel',
  templateUrl: './showhotel.component.html',
  styleUrls: ['./showhotel.component.scss']
})
export class ShowhotelComponent implements OnInit {
  

  private country:Country;

  constructor(private _countryService:CountryService) {}


    ngOnInit() {
      this.setCountry();
    }

    setCountry(){
      this.country = this._countryService.getter();
    }
    
}
