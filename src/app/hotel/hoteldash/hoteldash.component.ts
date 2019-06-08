import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../shared/country.service';
import {Router} from '@angular/router';
import {Country} from '../../country';

@Component({
  selector: 'app-hoteldash',
  templateUrl: './hoteldash.component.html',
  styleUrls: ['./hoteldash.component.scss']
})
export class HoteldashComponent implements OnInit {
  private countries:Country[];
  
  constructor(private _countryService:CountryService,private router:Router) {}
  searchText: string = "";  
     ngOnInit() {
      this.readCountries();
    }

    
    filerCondition(country:Country){
      return country.location.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }
    
    newCountry(country:Country){
      event.preventDefault();
      this._countryService.setter(country);
      this.router.navigate(['/showhotel']);

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

