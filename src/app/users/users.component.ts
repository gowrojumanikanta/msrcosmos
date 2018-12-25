import { Component, OnInit, Optional } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { User } from './user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isedit : boolean = false;
  isupdate : boolean = true;
  StudentId: string;
  StudentName:  string;
  Email:  string;
  Class: string;
  Year : string;
  City:  string;
  Country: string;

  updatekey: string;

  userList: User[];
  mdlSampleIsOpen: boolean;
  isModelActive: boolean;
  userForm: FormGroup;
  errorMessage : string;
  constructor(private userService: UserserviceService, private fb: FormBuilder) {
    this.userForm = fb.group({
      // $key: ['', Optional],
      StudentId: ['', Optional],
      StudentName: ['', Optional],
      Email: ['', Optional],
      Year : ['',Optional],
      Class: ['', Optional],
      City: ['', Optional],
      Country: ['', Optional],

    })
  }


  ngOnInit() {

    var list = this.userService.getUserdata();
    list.snapshotChanges().subscribe(item => {

      this.userList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userList.push(y as User);
      });
    });
  }

  save(value) {
    var resuserData = [];
    resuserData.push({
      StudentId: value.StudentId,
      StudentName: value.StudentName,
      Email: value.Email,
      Class: value.Class,
      Year : value.Year,
      City: value.City,
      Country: value.Country
    })
    if(value.StudentId != "" && value.StudentName != ""  && value.Email != ""
    && value.Class != "" && value.Year != ""   && value.City != ""  && value.Country != ""){
      this.userService.addUserdata(resuserData[0]);
      this.userForm.reset();
    }
    else{
        this.errorMessage = "Please enter all fields";
    }
    
    
  }

  private EditClick(data,currentdata): void {debugger;
    this.isedit = true;
    this.isupdate  = false;
    var val, resData = [];
    val = currentdata.$key;
    this.updatekey = currentdata.$key;
    data.forEach(function (res) {
      if (res.$key != undefined && val == res.$key) {
        resData.push(res);
      }
    });

    this.StudentId = resData[0].StudentId;
    this.StudentName = resData[0].StudentName;
    this.Email = resData[0].Email;
    this.Class = resData[0].Class;
    this.Year = resData[0].Year;
    this.City = resData[0].City;
    this.Country = resData[0].Country;

    this.userForm = this.fb.group({
      StudentId: [this.StudentId, Optional],
      StudentName: [this.StudentName, Optional],
      Email: [this.Email, Optional],
      Class: [this.Class, Optional],
      Year: [this.Year, Optional],
      City: [this.City, Optional],
      Country: [this.Country, Optional],
    });
    

  }

  update(value)
  {
    var updateuserData = [];
    updateuserData.push({
      // UserId: this.userGuid,
      StudentId: value.StudentId,
      StudentName: value.StudentName,
      Email: value.Email,
      Class: value.Class,
      Year : value.Year,
      City: value.City,
      Country: value.Country

    })
    if(value.StudentId != "" && value.StudentName != ""  && value.Email != ""
    && value.Class != "" && value.Year != ""   && value.City != ""  && value.Country != ""){
      this.userService.updateuser(updateuserData[0],this.updatekey);
      this.userForm.reset();
      this.isedit = false;
      this.isupdate  = true;
    }
    else{
        this.errorMessage = "Please enter all fields";
    }
  }
  private delete(value) : void{

    this.userService.deleteuser(value);
    this.userService.getUserdata();
  }

  clear()
  {
    this.userForm.reset();
  }
}
