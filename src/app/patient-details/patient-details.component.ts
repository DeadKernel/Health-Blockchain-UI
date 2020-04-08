import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ProfileService } from '../pages/dashboard/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  profileForm = new FormGroup({
    gender: new FormControl(''),
    dob: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    conditions: new FormControl(''),
    allergies: new FormControl('')
  });

  onSubmit() {
    var requesObj = this.profileForm.value;
    requesObj.email = JSON.parse(localStorage.getItem('auth_app_token')).value.toString();
    
    requesObj.conditionsList = requesObj.conditions.split('\n');
    requesObj.allergiesList = requesObj.allergies.split('\n');
    this.profileService.addPatientDetails(requesObj).subscribe(data=>{
      console.log(data);
      this.router.navigate(['auth/login']);
    },
    err=>{
      console.log(err);
    })
  }

  constructor(private profileService: ProfileService, private router:Router) { }

  ngOnInit() {
  }

}
