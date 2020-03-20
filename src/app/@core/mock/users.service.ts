import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    nick: { name: 'Aditya Padwal', picture: 'assets/images/patient1.jpeg' },
    eva: { name: 'Dr. Harish Grover', picture: 'assets/images/doctor-male.jpg' },
    jack: { name: 'Dr. Priti Shenai', picture: 'assets/images/doctor-female.jpg' },
    lee: { name: 'Dr. Niraj Kumar', picture: 'assets/images/doctor-male.jpg' },
    alan: { name: 'Dr. Akangsha Sharma', picture: 'assets/images/doctor-female.jpg' },
    kate: { name: 'Dr. Tarang Patel', picture: 'assets/images/doctor-male.jpg' },
  };
  private types = {
    mobile: 'General Physician',
    home: 'Oncologist',
    work: 'Dentist',
  };
  private contacts: Contacts[] = [
   
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12), action: "Revoked access"},
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45), action: "Granted access"},
    
    { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24), action: "Revoked access"},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45), action: "Granted access"},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42), action: "Granted access"},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31), action: "Revoked access"},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0), action: "Granted access"},
    { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12), action: "Revoked access"},
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45), action: "Granted access"},
   
    { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24), action: "Revoked access"},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45), action: "Granted access"},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42), action: "Granted access"},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31), action: "Revoked access"},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0), action: "Granted access"},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
