import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './Components/contact-manager/contact-manager.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginUserComponent } from './Components/User components/login-user/login-user.component';

const routes: Routes = [

{ path:'', redirectTo: '/user/login', pathMatch: 'full'},

{path:'user/login', component:LoginUserComponent },

{ path:'contacts/admin', component:ContactManagerComponent },

{ path:'contacts/add', component:AddContactComponent },

{ path:'contacts/edit/:contactId', component:EditContactComponent },




{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
