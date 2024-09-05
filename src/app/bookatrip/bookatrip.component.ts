import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../master.service';
import { response } from 'express';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Cruise } from '../model/Cruise';

@Component({
  selector: 'app-bookatrip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookatrip.component.html',
  styleUrl: './bookatrip.component.css'
})
export class BookatripComponent {

  cruises: Cruise[] = [];
  cruise2:Cruise=new Cruise();
  filterType: string = 'user';
  filterValue: string = '';
  startDate: any;
  endDate: any;
  constructor(private master: MasterService, private auth: AuthService) { 
    
    console.log(this.auth.getEmail())
  }

  ngOnInit(): void { }

  getBookings() {
    switch (this.filterType) {

      case 'ship':
        this.master.getcruisesByship(this.filterValue).subscribe(response => {
          this.cruises=[]
          console.log(response)
          this.cruise2 = response
          this.cruises.push(this.cruise2);
        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'cruiseline':
        this.master.getcruisesBycruiseline(this.filterValue).subscribe(response => {
          this.cruises=[]
          console.log(response)
          this.cruises = this.cruises.concat(response);        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'cruise':
        this.master.getcruisesBycruiseName(this.filterValue).subscribe(response => {
          this.cruises=[]
          this.cruises.push(response);        
        },
          (error) => {
            console.error(error);
          }
        )
        //  this.bookingService.getBookingsByCruise(this.filterValue).subscribe(data => this.bookings = data);
        break;
      case 'startdestination':
        this.master.getcruisebystartdestination(this.filterValue).subscribe(response => {
          this.cruises=[]
          console.log(response)
          this.cruises = this.cruises.concat(response);        
        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'enddestination':
        this.master.getcruisebyenddestination(this.filterValue).subscribe(response => {
          this.cruises=[]
          console.log(response)
          this.cruises = this.cruises.concat(response);        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'date':
        console.log(this.startDate)
        console.log(this.endDate)
        this.master.getCruisesBybetweenDates(this.startDate, this.endDate).subscribe(response => {
          this.cruises=[]
          console.log(response)
          this.cruises = this.cruises.concat(response);
                },
          (error) => {
            console.error(error);
          }
        )
        break;
    }
  }

  bookcruise(cruiseName: any) {
    console.log(cruiseName)
    const id = Number(this.auth.getUserId());
    this.master.bookaticketforcruise(id, cruiseName).subscribe(response => {
      
      console.log(response);
      Swal.fire("succesfully booked a ticket");
    },
      (error) => {
        console.error(error);
      }
    )
  }
}
