import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/api';
  private getPatientDetailsUrl = '/getPatient';
  private addPatientDetailsUrl = '/addPatientDetails';

  constructor(private httpClient: HttpClient) { }

  public getPatientDetails(email:string) {
    let params = new HttpParams().set('email',email);
    return this.httpClient.get(this.baseUrl+this.getPatientDetailsUrl,{params: params});
  }
  


  public addPatientDetails(requestObj) {
    console.log(requestObj.email);
   return this.httpClient.post(this.baseUrl+this.addPatientDetailsUrl,JSON.stringify({
      email: requestObj.email,
      gender: requestObj.gender,
      height: requestObj.height,
      weight: requestObj.weight,
      conditions: requestObj.conditionsList,
      allergies: requestObj.allergiesList,
      dob: moment(requestObj.dob).format('DD/MM/YYYY').toString()
   }))
  }
}
