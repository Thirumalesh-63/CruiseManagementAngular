import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../model/User';
import { MasterService } from '../master.service';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fixed the property name
})
export class RegisterComponent {
  passwordVisible: boolean = false; // Initialized as boolean

  master: MasterService = new MasterService(this.http);
  user: User =new User();

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth:AuthService
  ) { }

  onSubmit(form: NgForm) {
    console.log(form.value); 
    
    this.user.name=form.value.name;
    this.user.email=form.value.email;
    this.user.password=form.value.password;
    this.user.phonenumber=form.value.phonenumber;
    this.user.address=form.value.address;

    this.master.createuser(this.user).subscribe(
      (response: string) => {
        this.auth.setToken(response);
        console.log(response);
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
