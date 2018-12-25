import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database'
import { User} from './user.model';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userList : AngularFireList<any>;

  selectedUser : User = new User();
  private dbPath = '/Users';
  

  constructor(private firebase :AngularFireDatabase) {
    this.userList = firebase.list(this.dbPath);
   }

   getUserdata()
  {
    this.userList = this.firebase.list('Users');
    return this.userList;
  }

  addUserdata(data : User) {
    this.userList.push({
    // UserId:data.UserId,
    StudentId:data.StudentId,
    StudentName:data.StudentName,
    Email : data.Email,
    Class:data.Class,
    Year : data.Year,
    City: data.City,
    Country: data.Country
    });
  }

  updateuser(data : User,key) {debugger;
    this.userList.update(key,
      {

        StudentId: data.StudentId,
        StudentName:  data.StudentName,
        Email: data.Email,
        Class: data.Class,
        Year: data.Year,
        City: data.City,
        Country : data.Country
      });
  }

  deleteuser(data: User) {debugger;
   
    this.firebase.object('/Users/' + data.$key).remove();
  }
  
}
