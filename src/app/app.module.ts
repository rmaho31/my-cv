import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectiveComponent } from './features/objective/objective.component';
import { TechnicalComponent } from './features/technical/technical.component';
import { ProfessionalComponent } from './features/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectiveComponent,
    TechnicalComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ObjectiveComponent, TechnicalComponent, ProfessionalComponent]
})
export class AppModule { }
