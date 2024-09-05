import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { UsersidenavComponent } from '../usersidenav/usersidenav.component';

@Component({
  selector: 'app-userhomepage',
  standalone: true,
  imports: [HeaderComponent,UsersidenavComponent, RouterOutlet],
  templateUrl: './userhomepage.component.html',
  styleUrl: './userhomepage.component.css'
})
export class UserhomepageComponent {

}
