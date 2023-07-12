import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private service: RegisterService){
    
   }

  ngOnInit(): void {
  }


  logoutSubmit(){
    this.service.setLogoutStatus();
  }
}
