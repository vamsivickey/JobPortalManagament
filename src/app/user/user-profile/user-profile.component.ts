import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

declare var jQuery : any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  allUsers:any;

  editUsers:any;
  currentUser:any;

  constructor(private service: RegisterService){
    
    this.service.getAllUsers().subscribe((data: any)=>{
      console.log(data);
      this.allUsers = data;
    })

    this.editUsers = {  userId: '', userName:'', emailId:'', password:'', contactNum:''  };
  }



  ngOnInit() {

    let UserData = JSON.parse(localStorage.getItem('UserList') || '{}' );
    console.log(UserData);

    this.currentUser=UserData;
    console.log(this.currentUser);

  }


  deleteuser(userId: number){
    this.service.deleteUser(userId).subscribe((data)=>{
    const index = this.allUsers.findIndex((user:any)=>{
        return user.userId === userId;
      });
      this.allUsers.splice(index,1);
    });
  }


  showEditPopup(user: any) {
    this.editUsers = user;
    jQuery('#userModel').modal('show');
  }


  updateUser() {
    this.service.UpdateUser(this.editUsers).subscribe();
    // console.log(this.editCompany);
  }

}
