import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  public myId = "PP";
  public isDisables = true;

  constructor() { }

  ngOnInit(): void {
  }

}
