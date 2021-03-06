import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmeExperienceComponent } from './ame-experience/ame-experience.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';
import { RegistrationForm3Component } from './registration-form3/registration-form3.component';

const routes: Routes = [
  
  {path:'', component:RegistrationFormComponent},
  {path:'login',component:RegistrationFormComponent},
  {path:'registrationForm',component:RegistrationForm2Component},
  {path:'AME_Experience',component:AmeExperienceComponent},
  {path:'registration2',component:RegistrationForm3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
