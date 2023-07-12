import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';


declare var jQuery : any;

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {


  allCompines:any;

  editCompany:any;

  userProfile:any;

  currentUser:any;
  
  constructor(private service: RegisterService){
    
    this.service.getAllCompanys().subscribe((data: any)=>{
      console.log(data);
      this.allCompines = data;
    })

    this.editCompany = {  companyId: '', userName:'', emailId:'', password:'', companyName:'',  companyLocation:'' , contactNum:''  };

    


  }


  ngOnInit() {

    //here you can access your sessionstorage item like
    let UserData = JSON.parse(localStorage.getItem('compList') || '{}' );
    console.log(UserData);

    this.currentUser=UserData;
    console.log(this.currentUser);

    }

 
    deleteCompany(companyId: number){
      this.service.deleteCompany(companyId).subscribe((data)=>{
      const index = this.allCompines.findIndex((company:any)=>{
          return company.companyId === companyId;
        });
        this.allCompines.splice(index,1);
      });
    }


    showEditPopup(company: any) {
      this.editCompany = company;
      jQuery('#companyModel').modal('show');
    }


    updateCompany() {
      this.service.UpdateCompany(this.editCompany).subscribe();
      // console.log(this.editCompany);
    }




}
