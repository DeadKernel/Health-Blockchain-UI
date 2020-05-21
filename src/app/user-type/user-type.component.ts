import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../user-type.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {
  profileForm = new FormGroup({
    userType: new FormControl('')
  });

  constructor(private userTypeService: UserTypeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userTypeService.addUserType(JSON.parse(localStorage.getItem('auth_app_token')).value,this.profileForm.value.userType).subscribe(data=>{
      if(this.profileForm.value.userType == 'doctor') {
        this.router.navigate(['auth/doctor-details']);
      }
      else if (this.profileForm.value.userType == 'patient') {
        this.router.navigate(['auth/patient-details']);
      }
    },
    err=>{
      console.log(err);
    })
  }

}
