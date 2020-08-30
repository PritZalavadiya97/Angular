import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PropertyComponent,
    ClassComponent,
    StyleComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
