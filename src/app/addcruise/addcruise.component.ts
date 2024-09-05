import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../auth.service';
import { MasterService } from '../master.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cruise } from '../model/Cruise';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcruise',
  standalone: true,
  imports: [
    CommonModule,          // Use CommonModule for common Angular directives
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './addcruise.component.html',
  styleUrl: './addcruise.component.css'
})
export class AddcruiseComponent {

  isEditOperation: boolean = false;
 ships:any=[];
  cruise:Cruise=new Cruise();
   auth:AuthService=new AuthService();
   selectedShip:any;
   itineraries:any=[];
  constructor(private http: HttpClient, private master: MasterService,private router:Router,private route: ActivatedRoute) {
    this.master.getAllShips().subscribe(response=>
     this.ships=response
    )
  }

  ngOnInit(): void {


    this.route.queryParams.subscribe((params: any) => {
      if (params.action == 'edit') {
        this.isEditOperation = true;
        this.cruise = JSON.parse(params.sub);
      }
    });


  }

  onSubmit(form: NgForm) {
    this.cruise.cruiseName=form.value.cruiseName;
    this.cruise.startdestination=form.value.startdestination;
  
// Convert comma-separated string to an array
       this.itineraries = (form.value.itinerary as string).split(',').map(item => item.trim());

    this.cruise.itinerary=this.itineraries;
    this.cruise.enddestination=form.value.enddestination;
    this.cruise.startdate=form.value.startdate;
    this.cruise.enddate=form.value.enddate;
    this.cruise.price=form.value.price;
    const idAsNumber = Number(this.selectedShip.id);


    this.master.createCruise(idAsNumber,this.cruise).subscribe(
      (response) => {
        Swal.fire('cruise added Successfully');
        //  this.router.navigate(["adminpage/Subjects"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }

    // Your logic for adding a cruiseline
  

  onEditSubmit(editSubjectForm: NgForm) {
    // Your logic for editing a cruiseline
    
// Convert comma-separated string to an array
if(typeof(editSubjectForm.value.itinerary) === 'string'){
  this.itineraries = (editSubjectForm.value.itinerary as string).split(',').map(item => item.trim());
  this.cruise.itinerary=this.itineraries;
}

this.cruise.ship=this.selectedShip;
    console.log(this.cruise);
    this.master.updatecruise(this.cruise.id,this.cruise).subscribe(
      (response) => {
        Swal.fire('Cruise Updated Successfully');
        // this.router.navigate(["adminpage/Subjects"]);
      },
      (error) => {
        console.error(error);
      }
    );

  }
  
}
