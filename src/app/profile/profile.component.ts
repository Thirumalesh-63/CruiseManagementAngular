import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { User } from '../model/User';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MasterService } from '../master.service';
import { AuthService } from '../auth.service';
import { response } from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatCardModule,
    MatButtonModule, 
    MatInputModule, 
    MatIconModule, 
    HttpClientModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user:User=new User();
  user2:User=new User();
  user3:User=new User();
  id:any;
  isEditMode?:boolean;
  constructor(private route:ActivatedRoute,private http:HttpClient,private master:MasterService,private auth:AuthService) { 
    const id=this.auth.getUserId();
    if(id){
      this.master.getUser(id).subscribe(response=>{
        this.user=response
      },
      (error) => {
        console.error(error);
      }
    )
    }
   
  }
   
  ngOnInit() {

   
  }


  updateprofile()
{
  if(this.user.id){
    this.master.updateUser(this.user.id,this.user).subscribe(response=>{
      Swal.fire("succesfully updated")
     },
     (error)=>{
          Swal.fire(error)
     }
    )
  }
  
}

enableEditMode(){
  this.isEditMode = true;
}

disableEditMode(){
  this.isEditMode = false;
}
}

