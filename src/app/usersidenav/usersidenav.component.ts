import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersidenav',
  standalone: true,
  imports: [  MatSidenavModule,
    MatListModule,
    MatIconModule],
  templateUrl: './usersidenav.component.html',
  styleUrl: './usersidenav.component.css'
})
export class UsersidenavComponent {

  constructor(private router: Router) { }
  onSidenavClick(name: any) {
    if (name == 'bookatrip') {
      this.router.navigate(["userhomepage/bookatrip"]);
    }
    else if (name == "userbookings") {
 
      this.router.navigate(["userhomepage/userbookings"]);
    }
    else if (name == "profile") {
      this.router.navigate(["userhomepage/profile"]);
    }
    else {
      this.router.navigate(["userhomepage"]);
    }
  }

}
