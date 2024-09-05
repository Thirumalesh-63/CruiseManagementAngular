import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MasterService } from '../master.service';
import { AuthService } from '../auth.service';
import { Ship } from '../model/Ship';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [HttpClientModule, CommonModule,
    MatButtonModule],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.css'
})
export class ShipComponent {

  master: MasterService = new MasterService(this.http);

  auth:AuthService=new AuthService();
  ships: any[] = [];
  constructor( private http: HttpClient,private router:Router){
  
    console.log("in ship")
    console.log(this.auth.getToken());
    this.master.getAllShips().subscribe(
      (response:any) => {
        this.ships=response;
       // this.router.navigate(['/userpage']);
      },
      (error) => {
        console.error(error);
      }
    );
  
  }
  addData(){
  
    this.router.navigate(['/adminhomepage/addship']);
  }
  
  editExam(ship:Ship){
    
    this.router.navigate(['/adminhomepage/addship'], { queryParams: { action: 'edit', sub: JSON.stringify(ship) } });

  }
  deleteExam(id:number){

    this.master.deleteship(id).subscribe(
      (response: any) => {
        console.log("Delete response:", response);
        Swal.fire("ship deleted succesfully"); // Show success message
      },
      (error) => {
        console.error("Error deleting cruiseline:", error.message);
        Swal.fire("Failed to delete cruiseline. Please try again.");
      }
    );
  }
  
  }