import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:RegisterService, private router:Router) {
  }

  ngOnInit(): void {
  }

    user = {
      username: '',
      email: '',
      password: '',
      mobile: ''
    };
    

    register(employee: any) {
      // console.log(employee);
      // alert('Employee registered Sucessfully...Login to continue..')
      this.service.ShowSuccess('Email authentication link sent successfully' , 'Verify your E-Mail & Login ')
      this.router.navigate(['login']);
      this.service.registerUser(employee).subscribe(() => {
        
      });

    }

 
    
  }
  


