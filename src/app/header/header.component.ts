import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isloggedin: boolean = false;

  constructor(private router: Router,private auth:AuthService) {
    this.isloggedin = this.auth.isLoggedIn();
  }

  logout() {

    console.log('logout')
    this.auth.removeToken();
    this.isloggedin = false;
    this.router.navigate(['/home']);
  }

}
