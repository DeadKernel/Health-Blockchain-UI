import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailsService {
  private baseUrl = 'http://localhost:3000/api';
  private addDoctorDetailsUrl = '/addDoctorDetails';

  constructor(private httpClient: HttpClient) { }

  public addDoctorDetails(requestObj) {
    return this.httpClient.post(this.baseUrl+this.addDoctorDetailsUrl,{
      email: requestObj.email,
      gender: requestObj.gender,
      qualifications: requestObj.qualificationsList,
      docId: requestObj.docId,
      dob: moment(requestObj.dob).format('DD/MM/YYYY').toString()
    })
  }
}
