import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';
import { TemplateComponent } from './template/template.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PropertyComponent,
    ClassComponent,
    StyleComponent,
    EventComponent,
    TemplateComponent,
    TwoWayComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent,
    NgforDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
