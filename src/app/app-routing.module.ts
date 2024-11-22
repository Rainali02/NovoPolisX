import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ServicesComponent } from './services/services.component';
import { AboutCityComponent } from './about-city/about-city.component';
import { TouristPlacesComponent } from './tourist-places/tourist-places.component';
import { HotelsComponent } from './hotels/hotels.component';
import { JobsComponent } from './jobs/jobs.component';
import { UniversitiesComponent } from './universities/universities.component';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './addevent/addevent.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {path : "", redirectTo: localStorage.getItem('username') ? 'user-home' : 'home', pathMatch: 'full'},
      {path : "home", component : HomeComponent},
      {path : "user-home", component : UserHomeComponent},
      {path : "register", component : RegisterComponent},
      {path : "login", component : LoginComponent},
      {path : "contact", component : ContactComponent},
      {path : "services", component : ServicesComponent},
      {path : "about-city", component : AboutCityComponent},
      {path : "tourist-places", component : TouristPlacesComponent},
      {path : "hotels", component : HotelsComponent},
      {path : "jobs", component : JobsComponent},
      {path : "universities", component : UniversitiesComponent},
      {path : "events", component : EventsComponent},
      {path : "addevent", component : AddeventComponent},
      {path : "ticket", component : TicketComponent}
    ])
  ]
})
export class AppRoutingModule { }
