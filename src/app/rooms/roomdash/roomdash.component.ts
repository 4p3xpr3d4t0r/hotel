import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomdash',
  templateUrl: './roomdash.component.html',
  styleUrls: ['./roomdash.component.scss']
})
export class RoomdashComponent implements OnInit {

  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  public isLoggedIn: boolean;
  constructor() {

  }

  ngOnInit() {
  } 
}
