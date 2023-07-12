import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';


@Component({
  selector: 'app-companyheader',
  templateUrl: './companyheader.component.html',
  styleUrls: ['./companyheader.component.css']
})
export class CompanyheaderComponent implements OnInit {

  constructor(private service: RegisterService){
    
  }


  

  ngOnInit(): void {
  }

  logoutSubmit(){
    this.service.setLogoutStatus();
  }

}
