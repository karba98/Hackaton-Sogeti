import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datascreen',
  templateUrl: './datascreen.component.html',
  styleUrls: ['./datascreen.component.css']
})
export class DatascreenComponent implements OnInit {

  authenticated:boolean
  constructor() { 
    this.authenticated=true;
  }

  ngOnInit(): void {
  }

}
