import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { CruiselineComponent } from './cruiseline/cruiseline.component';
import { ShipComponent } from './ship/ship.component';
import { CruiseComponent } from './cruise/cruise.component';
import { AddcruiselineComponent } from './addcruiseline/addcruiseline.component';
import { AddshipComponent } from './addship/addship.component';
import { AddcruiseComponent } from './addcruise/addcruise.component';
import { BookingComponent } from './booking/booking.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { BookatripComponent } from './bookatrip/bookatrip.component';
import { UserbookingsComponent } from './userbookings/userbookings.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [


    
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userhomepage', component: UserhomepageComponent,
    children: [ 
      { path: 'bookatrip', component: BookatripComponent },
      { path: 'userbookings', component: UserbookingsComponent },
      { path: 'profile', component: ProfileComponent },
    ]
   },
  {
    path: 'adminhomepage', component: AdminhomepageComponent,
      children: [
        { path: 'cruiseline', component: CruiselineComponent },
        { path: 'ship', component: ShipComponent },
        { path: 'bookings', component: BookingComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'cruise', component: CruiseComponent },
        { path: 'addcruiseline', component: AddcruiselineComponent},
        { path: 'addship', component: AddshipComponent},
        { path: 'addcruise', component: AddcruiseComponent},
      ]
  },
  { path: '**', component: HomeComponent },
];
