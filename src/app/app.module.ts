import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { PetTableComponent } from './pet-table/pet-table.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PetListComponent,
    PetFormComponent,
    PetEditComponent,
    PetTableComponent,
    AboutComponent,
  ],
  imports: [
    NgbModule,
	  BrowserModule,
    AppRoutingModule,
    RoutingModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }