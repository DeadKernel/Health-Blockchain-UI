import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private baseUrl = 'http://localhost:3000/api';
  private userTypeUrl = '/addUserType';

  constructor(private httpClient: HttpClient) { }

  public addUserType(email: string, userType: string) {
  
    return this.httpClient.post(this.baseUrl+this.userTypeUrl,{email: email, userType: userType});
  }
}
