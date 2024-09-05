import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MasterService } from '../master.service';
import { AuthService } from '../auth.service';
import { Cruise } from '../model/Cruise';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cruise',
  standalone: true,
  imports: [HttpClientModule, CommonModule,
    MatButtonModule],
  templateUrl: './cruise.component.html',
  styleUrl: './cruise.component.css'
})
export class CruiseComponent {

  master: MasterService = new MasterService(this.http);

  auth:AuthService=new AuthService();
  cruises: any[] = [];
  constructor( private http: HttpClient,private router:Router){
  
    console.log("in cruiseline")
    console.log(this.auth.getToken());
    this.master.getAllCruises().subscribe(
      (response:any) => {
        this.cruises=response;
        console.log(this.cruises)
      
      },
      (error) => {
        console.error(error);
      }
    );
  
  }
  addData(){
    this.router.navigate(['/adminhomepage/addcruise']);
  }
  
  editExam(Cruise:Cruise){

    this.router.navigate(["adminhomepage/addcruise"], { queryParams: { action: 'edit', sub: JSON.stringify(Cruise) } });

  
  }
  deleteExam(id:number){
  
 
    this.master.deletecruise(id).subscribe(
      (response: any) => {
        console.log("Delete response:", response);
        Swal.fire("cruise deleted succesfully"); // Show success message
      },
      (error) => {
        console.error("Error deleting cruiseline:", error.message);
        Swal.fire("Failed to delete cruiseline. Please try again.");
      }
    );
  }
  
  }