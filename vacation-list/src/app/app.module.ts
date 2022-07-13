import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationCardComponent } from './cards/vacation-card/vacation-card.component';
import { NewVacationComponent } from './modal/new-vacation/new-vacation.component';
import { NewVacationButtonComponent } from './buttons/new-vacation-button/new-vacation-button.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationCardComponent,
    NewVacationComponent,
    NewVacationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
