import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { AuthService } from '../auth.service';
import { Booking } from '../model/Booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userbookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userbookings.component.html',
  styleUrl: './userbookings.component.css'
})
export class UserbookingsComponent {

  bookings:Booking[]=[];
  constructor(private master:MasterService,private auth:AuthService){
    const email=this.auth.getEmail();
    console.log(email)
    if(email){
      this.master.getbookingsbyuser(email).subscribe(
        response=>{
         console.log(response)
         this.bookings=this.bookings.concat(response);
        } 
       )
    }
   
  }
}
