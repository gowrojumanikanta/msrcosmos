import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database'
import { Register} from './register.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  userList : AngularFireList<any>;
  selectedUser : Register = new Register();
  // private dbPath = '/Users';

  constructor(private firebase :AngularFireDatabase) {
    // this.userList = firebase.list(this.dbPath);
   }

  


  // addUser(data : Register) {debugger;
  //   this.userList.push({
  //   EmailId:data.EmailId,
  //   FirstName:data.FirstName,
  //   MiddleName : data.MiddleName,
  //   LastName:data.LastName,
  //   Password: data.Password,
  //   Mobile: data.Mobile
  //   });
  // }
}
