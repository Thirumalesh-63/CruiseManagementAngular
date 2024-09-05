import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; // Optional, if you're using icons in the list

@Component({
  selector: 'app-adminsidenav',
  standalone: true,
  imports: [ 
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './adminsidenav.component.html',
  styleUrl: './adminsidenav.component.css'
})
export class AdminsidenavComponent {


  
  constructor(private router: Router) { }
  onSidenavClick(name: any) {
    if (name == 'Cruiseline') {
      this.router.navigate(["adminhomepage/cruiseline"]);
    }
    else if (name == "Ship") {
 
      this.router.navigate(["adminhomepage/ship"]);
    }
    else if (name == "Bookings") {
      this.router.navigate(["adminhomepage/bookings"]);
    }
    else if (name == "Profile") {
      this.router.navigate(["adminhomepage/profile"]);
    }
    else {
      this.router.navigate(["adminhomepage/cruise"]);
    }
  }
}
