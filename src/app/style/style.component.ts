import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

   public name = "Style Prit";
   public RG = false;
   public highlight = "blue";
   public newstyle = {
     color : "red",
     fontStyle : "italic"
   }

  constructor() { }

  ngOnInit(): void {
  }

}
