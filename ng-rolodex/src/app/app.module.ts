import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { AllContactsComponent } from './pages/all-contacts/all-contacts.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClient } from 'selenium-webdriver/http';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegisterComponent } from './pages/register/register.component';

import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';
import { CardsComponent } from './pages/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllContactsComponent,
    MyProfileComponent,
    HeaderComponent,
    LoginComponent,
    AddFormComponent,
    EditFormComponent,
    LandingPageComponent,
    RegisterComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
