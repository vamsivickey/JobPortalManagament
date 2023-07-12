import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-view-applied-users',
  templateUrl: './view-applied-users.component.html',
  styleUrls: ['./view-applied-users.component.css']
})
export class ViewAppliedUsersComponent implements OnInit {


    allAppliedData:any;
    term:any;

    constructor(private service: RegisterService){

      this.service.getAllAppliedUsers().subscribe((data: any)=>{
        console.log(data);
        this.allAppliedData = data;
      })

     
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

    // showEditPopup(company: any) {
    //   // this.allAppliedData = company;
    //   // jQuery('#companyModel').modal('show');
    // }

  }
