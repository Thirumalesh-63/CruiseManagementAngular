import { Component } from '@angular/core';
import { MasterService } from '../master.service';

import { FormsModule } from '@angular/forms'; // For ngModel
import { CommonModule } from '@angular/common'; // For ngIf and ngFor
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {


  bookings: any = [];
  filterType: string = 'user';
  filterValue: string = '';
  startDate: any;
  endDate: any;
  constructor(private master: MasterService) { }

  ngOnInit(): void { }

  getBookings() {
    switch (this.filterType) {

      case 'user':
        this.master.getbookingsbyuser(this.filterValue).subscribe(response => {
          console.log(response)
          this.bookings = response
        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'cruiseline':
        this.master.getbookingsbycruiseline(this.filterValue).subscribe(response => {
          console.log(response)
          this.bookings = response
        },
          (error) => {
            console.error(error);
          })
        break;
      case 'cruise':
        this.master.getbookingsbycruise(this.filterValue).subscribe(response => {
          this.bookings = response
        },
          (error) => {
            console.error(error);
          }
        )
        //  this.bookingService.getBookingsByCruise(this.filterValue).subscribe(data => this.bookings = data);
        break;
      case 'startdestination':
        this.master.getbookingsbystartdestination(this.filterValue).subscribe(response => {
          console.log(response)
          this.bookings = response
        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'enddestination':
        this.master.getbookingsbyenddestination(this.filterValue).subscribe(response => {
          console.log(response)
          this.bookings = response
        },
          (error) => {
            console.error(error);
          }
        )
        break;
      case 'date':
        console.log(this.startDate)
        console.log(this.endDate)
        this.master.getbookingsbetweendate(this.startDate, this.endDate).subscribe(response => {
          console.log(response)
          this.bookings = response
        },
          (error) => {
            console.error(error);
          }
        )
        break;
    }
  }
}
