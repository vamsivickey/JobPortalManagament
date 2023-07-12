import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-company-applications',
  templateUrl: './company-applications.component.html',
  styleUrls: ['./company-applications.component.css']
})
export class CompanyApplicationsComponent implements OnInit {
 
  allAppliedData:any;
  // term:any;

  constructor(private service: RegisterService){

    this.service.getAllAppliedUsers().subscribe((data: any)=>{
      console.log(data);
      this.allAppliedData = data;
    })

    // this.term="search";

   
  }
  ngOnInit(): void {

  }

  deleteApplication(applicationId: number){
    this.service.deleteApplication(applicationId).subscribe((data)=>{
    const index = this.allAppliedData.findIndex((application:any)=>{
        return application.applicationId === applicationId;
      });
      this.allAppliedData.splice(index,1);
    });
  }

  

  updateApplication(email:any) {
    this.service.successMail(email).subscribe();
    // console.log(this.editCompany);
  }

  rejectApplication(email:any) {
    this.service.rejectMail(email).subscribe();
    // console.log(this.editCompany);
  }


}
