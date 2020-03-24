import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/api';
  private getPatientDetailsUrl = '/getPatient';
  
  constructor(private httpClient: HttpClient) { }

  public getPatientDetails(email:string) {
    let params = new HttpParams().set('email',email);
    return this.httpClient.get(this.baseUrl+this.getPatientDetailsUrl,{params: params});
  }
}
