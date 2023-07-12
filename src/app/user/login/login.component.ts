import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

declare var gapi :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UsersList :any;

  private auth:any;
  constructor(private service:RegisterService, private router:Router) { 
    this.service.getAllUsers().subscribe((data:any)=>{
      console.log(data)
      this.UsersList=data;
    })
  }

  ngOnInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '791068067127-j9ujjgih8hd7t0rhf5oj4dpmkk9gof5k.apps.googleusercontent.com'
      });
    });

    // this.router.navigate(['userheader']);

  }
  
  signInWithGoogle() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: { getAuthResponse: () => { (): any; new(): any; id_token: any; }; }) => {
      const idToken = googleUser.getAuthResponse().id_token;
      // Call your backend API to authenticate the user using the ID token
      this.service.setLoginStatus();
      alert('WELCOME to User Home Page')
      
    });
  }
 

  submitForm(loginForm: any) {

    if (loginForm.userEmail === 'admin' && loginForm.userPassword==='admin'){
      this.service.setLoginStatus();
      // alert('WELCOME to HR Home Page')
      this.router.navigate(['userheader']);
    } else{

        // if(enabled){
      
      this.UsersList.forEach((UserList:any) => {

       if(loginForm.userEmail == UserList.userEmail && loginForm.userPassword == UserList.userPassword && UserList.enabled== true){

        localStorage.setItem("UserList", JSON.stringify(UserList));


        this.service.setLoginStatus();
        //  alert('WELCOME to User Home Page')
        this.service.ShowSuccess('WELCOME back to User Home Page' , 'Login Success')

         this.router.navigate(['userheader']);
       }

       else{
        this.service.Showerror('Invalid Email/Password' , 'Login Fail')

       }


      });

      
     }

  
  }

  

}
