import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContactManagerComponent } from './Components/contact-manager/contact-manager.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSearchPipeModule } from 'ngx-search-pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
