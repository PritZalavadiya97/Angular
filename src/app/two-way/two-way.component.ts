import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

  any(value){
    console.log(value);    
  }

}