import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MasterService } from '../master.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Cruiseline } from '../model/CruiseLine';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-addcruiseline',
  standalone: true,
  imports: [
    CommonModule,          // Use CommonModule for common Angular directives
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './addcruiseline.component.html',
  styleUrls: ['./addcruiseline.component.css']  // `styleUrl` should be `styleUrls`
})
export class AddcruiselineComponent {

  isEditOperation: boolean = false;
  cruiseline: Cruiseline = new Cruiseline();
   auth:AuthService=new AuthService();
  constructor(private http: HttpClient, private master: MasterService,private router:Router, private route: ActivatedRoute) {
    this.master.getallusers().subscribe(response=>
      console.log(response)
    )
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.action == 'edit') {
        this.isEditOperation = true;
        this.cruiseline = JSON.parse(params.sub);
      }
    });
  }

  onSubmit(form: NgForm) {
    this.cruiseline.name=form.value.name;
    this.cruiseline.headquarters=form.value.headquarters;
    this.cruiseline.contactnumber=form.value.contactnumber;
  console.log(this.auth.getToken());

    this.master.createcruiseline(this.cruiseline).subscribe(
      (response) => {
        swal.fire('Cruiseline added Successfully');
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

    // Your logic for adding a cruiseline
  

  onEditSubmit(editSubjectForm: NgForm) {
    
    
    this.master.updateCruiseLine(this.cruiseline.id,this.cruiseline).subscribe(
      (response) => {
        swal.fire('CruiseLine Updated Successfully');
        // this.router.navigate(["adminpage/Subjects"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
