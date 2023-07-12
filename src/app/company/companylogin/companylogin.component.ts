import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent implements OnInit {

  CompanyUsers :any;
  
  // userid:any;


  constructor(private service:RegisterService, private router:Router) { 
    this.service.getAllCompanys().subscribe((data:any)=>{
      console.log(data)
      this.CompanyUsers=data;
    })
  }

  ngOnInit(): void {
  }

  submitForm(loginForm: any) {

    if (loginForm.companyEmail === 'admin' && loginForm.password==='admin'){
      this.service.setLoginStatus();
      this.router.navigate(['companyHeader']);
      this.service.ShowSuccess('WELCOME to Admin Home Page' , 'Login Success')

    } else{
      this.CompanyUsers.forEach((compList:any) => {
       if(loginForm.companyEmail == compList.companyEmail && loginForm.password == compList.password){


        // tested to get logined company user details to updtate company profile
        localStorage.setItem("compList", JSON.stringify(compList));
        // localStorage.setItem('myObject', JSON.stringify(this.myObject));
        const UserData = localStorage.getItem("compList");
        // this.myObject = JSON.parse(localStorage.getItem('myObject'));

        console.log(UserData);

       
        

        this.service.setLoginStatus();
         this.service.ShowSuccess('WELCOME back to Recruiter Home Page' , 'Login Success')
        //  alert('WELCOME to User Home Page')
         this.router.navigate(['companyHeader']);
       }

       else{
        this.service.Showerror('Invalid Email/Password' , 'Login Fail')

       }
      });
     }

  }


  

}
