import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ProfileService } from '../pages/dashboard/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  profileForm = new FormGroup({
    FileType: new FormControl(''),
    upload : new FormControl('')
  });

  onSubmit() {
 
  }

  constructor(private profileService: ProfileService, private router:Router) { }

  ngOnInit() {
  }

}
