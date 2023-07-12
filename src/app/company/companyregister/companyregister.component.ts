import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

declare var jQuery : any;

@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.css']
})
export class CompanyregisterComponent implements OnInit {

  constructor(private service:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  register(company: any) {
    // console.log(company);
    // alert('company registered Sucessfully...')
    this.service.ShowSuccess('Email authentication link sent successfully' , 'Verify your E-Mail & Login ')
    this.router.navigate(['compLogin']);
    this.service.registerCompany(company).subscribe(() => {
      
    });
  }
  

  // company = {
  //   companyUser:'',
  //   companyName: '',
  //   headquarters: '',
  //   emailId:'',
  //   password: '',
  //   mobileNum: '',
  //   description:''
  // };




  // showEditPopup(employee: any) {
  //   this.company = employee;
  //   jQuery('#empModel').modal('show');
  // }


}
