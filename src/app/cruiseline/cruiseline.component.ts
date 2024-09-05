import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cruiseline } from '../model/CruiseLine';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';  // If using Angular Material button
import { Router } from '@angular/router';
import { response } from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cruiseline',
  standalone: true,
  imports: [HttpClientModule, CommonModule,
    MatButtonModule],
  templateUrl: './cruiseline.component.html',
  styleUrl: './cruiseline.component.css',

})
export class CruiselineComponent {

master: MasterService = new MasterService(this.http);


cruiselines: any[] = [];
constructor( private http: HttpClient,private router: Router,private auth:AuthService){

  console.log("in cruiseline")
  console.log(this.auth.getToken());
  this.master.getallusers().subscribe(response=>
    console.log(response)
  )
  this.master.getAllCruiseLines().subscribe(
    (response:any) => {
      this.cruiselines=response;
     // this.router.navigate(['/userpage']);
    },
    (error) => {
      console.error(error);
    }
  );

}
addData(){

  this.router.navigate(["adminhomepage/addcruiseline"]);
}

editExam(cruiseline:Cruiseline){
  this.router.navigate(["adminhomepage/addcruiseline"], { queryParams: { action: 'edit', sub: JSON.stringify(cruiseline) } });
}
deleteExam(id:number){

  this.master.deletecruiseline(id, { responseType: 'text' }).subscribe(
    (response: string) => {
      console.log("Delete response:", response);
      Swal.fire("cruiseline deleetd succesfully"); // Assuming response is plain text
    },
    (error) => {
      console.error("Error deleting cruiseline:", error);
      Swal.fire("Failed to delete cruiseline. Please try again.");
    }
  );
}

}
