import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgForm } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { User } from '../model/User';
import { MasterService } from '../master.service';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Userdetails } from '../model/userdetails';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    FormsModule,
    HttpClientModule
    // other modules
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  passwordVisible: boolean = false; // Initialized as boolean

  role:string=""
  token?:string=""
  master: MasterService = new MasterService(this.http);

  constructor(  private router: Router,
    private http: HttpClient,
    private auth:AuthService){

  }
  user:User=new User();
  onSubmit(form:NgForm){

    this.user.email=form.value.email;
    this.user.password=form.value.password;
    console.log(this.user)
    this.master.loginuser(this.user).subscribe(
      (response:Userdetails) => {
        this.token=response.token;
        console.log("response token")
        console.log(this.token)
        if(this.token){
          this.auth.setToken(this.token);
        }
        if(response.role=="[ADMIN]"  && response.id && response.email){
               this.router.navigate(['/adminhomepage']);
               this.auth.setUserId(response.id);
           this.auth.setEmail(response.email);
        }
        if(response.role=="[CUSTOMER]" && response.id && response.email){
          this.router.navigate(['/userhomepage']);
           this.auth.setUserId(response.id);
           this.auth.setEmail(response.email);
   }
       // this.router.navigate(['/userpage']);
      },
      (error) => {
        console.error(error);
      }
    );


  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

}
