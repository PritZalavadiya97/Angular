import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public name = "Hello Template";

  constructor() { }

  ngOnInit(): void {
  }

  logmessage(value){
    console.log(value);    
  }

}
