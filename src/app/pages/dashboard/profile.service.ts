import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/api';
  private getUserDetailsUrl = '/getUser';
  private addPatientDetailsUrl = '/addPatientDetails';

  constructor(private httpClient: HttpClient) { }

  public getUserDetails(email:string) {
    let params = new HttpParams().set('email',email);
    return this.httpClient.get(this.baseUrl+this.getUserDetailsUrl,{params: params});
  }
  


  public addPatientDetails(requestObj) {
    console.log(requestObj.email);
   return this.httpClient.post(this.baseUrl+this.addPatientDetailsUrl,{
      email: requestObj.email,
      gender: requestObj.gender,
      height: requestObj.height.toString()+'cm',
      weight: requestObj.weight.toString()+'kg',
      conditions: requestObj.conditionsList,
      allergies: requestObj.allergiesList,
      dob: moment(requestObj.dob).format('DD/MM/YYYY').toString()
   })
  }
}
