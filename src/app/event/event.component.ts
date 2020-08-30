import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public name = "Hello PrIt"
  public  geting = ""

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event)
  {
    console.log("Welcome HYY"); 
    this.geting = event.type   
  }
  
}
