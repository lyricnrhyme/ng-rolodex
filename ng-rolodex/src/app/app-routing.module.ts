import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './pages/search/search.component';
import { AllContactsComponent } from './pages/all-contacts/all-contacts.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoreInfoComponent } from './pages/more-info/more-info.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'contacts/details', component: MoreInfoComponent},
  { path: 'contacts', component: AllContactsComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: AddFormComponent },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
