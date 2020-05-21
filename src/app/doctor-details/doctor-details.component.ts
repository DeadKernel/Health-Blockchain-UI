import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorDetailsService } from '../doctor-details.service';

@Component({
  selector: 'ngx-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  profileForm = new FormGroup({
    gender: new FormControl(''),
    dob: new FormControl(''),
    qualifications: new FormControl(''),
    docId: new FormControl('')
  });

  onSubmit() {
    var requesObj = this.profileForm.value;
    requesObj.email = JSON.parse(localStorage.getItem('auth_app_token')).value.toString();
    
    requesObj.qualificationsList = requesObj.qualifications.split('\n');
  
    this.doctorDetailsService.addDoctorDetails(requesObj).subscribe(data=>{
      console.log(data);
      this.router.navigate(['auth/login']);
    },
    err=>{
      console.log(err);
    })
  }


  constructor(private router: Router, private doctorDetailsService: DoctorDetailsService) { }

  ngOnInit() {
  }

}
