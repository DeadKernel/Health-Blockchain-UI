import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ProfileService } from '../pages/dashboard/profile.service';
import { Router } from '@angular/router';
import { NbListComponent } from '@nebular/theme';

interface Profile {
  DoctorList: NbListComponent;
}

@Component({
  selector: 'ngx-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  profileForm = new FormGroup({
    AccessOpt : new FormControl('')
  });

  onSubmit() {
    var requesObj = this.profileForm.value;
    requesObj.email = JSON.parse(localStorage.getItem('auth_app_token')).value.toString();

    this.profileService.allowAccess(requesObj).subscribe(data=>{
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
