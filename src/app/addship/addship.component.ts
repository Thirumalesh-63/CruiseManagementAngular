import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cruiseline } from '../model/CruiseLine';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { Ship } from '../model/Ship';
@Component({
  selector: 'app-addship',
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
  templateUrl: './addship.component.html',
  styleUrl: './addship.component.css'
})
export class AddshipComponent {

  isEditOperation: boolean = false;
 ship:Ship=new Ship();
  cruiselines:any=[];
   auth:AuthService=new AuthService();
   selectedCruiseline:any;
  constructor(private http: HttpClient, private master: MasterService,private router:Router, private route: ActivatedRoute) {
    this.master.getallcruiselines().subscribe(response=>
     this.cruiselines=response
    )
  }

  ngOnInit(): void {



    this.route.queryParams.subscribe((params: any) => {
      if (params.action == 'edit') {
        this.isEditOperation = true;
        this.ship = JSON.parse(params.sub);
        if(this.ship.cruiseline?.name){
          console.log("-----------------------------")
          
          this.selectedCruiseline=this.ship.cruiseline.name;
          console.log(this.selectedCruiseline)

        }
      }
    });

  }

  onSubmit(form: NgForm) {
    this.ship.name=form.value.name;
    this.ship.capacity=form.value.capacity;
    const idAsNumber = Number(this.selectedCruiseline.id);


    this.master.createShip(idAsNumber,this.ship).subscribe(
      (response) => {
        Swal.fire('ship added Successfully');
       
      },
      (error) => {
        console.error(error);
      }
    );
  }

    // Your logic for adding a cruiseline
  

  onEditSubmit(editSubjectForm: NgForm) {

    this.ship.cruiseline=this.selectedCruiseline;
    this.master.updateship(this.ship.id,this.ship).subscribe(
      (response) => {
        Swal.fire('ship Updated Successfully');
        // this.router.navigate(["adminpage/Subjects"]);
      },
      (error) => {
        console.error(error);
      }
    );

    // Your logic for editing a cruiseline
  }
  
}
