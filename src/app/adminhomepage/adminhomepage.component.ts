import { Component } from '@angular/core';
import { AdminsidenavComponent } from '../adminsidenav/adminsidenav.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  standalone: true,
  imports: [HeaderComponent,AdminsidenavComponent,RouterOutlet],
  templateUrl: './adminhomepage.component.html',
  styleUrl: './adminhomepage.component.css'
})
export class AdminhomepageComponent {

}
