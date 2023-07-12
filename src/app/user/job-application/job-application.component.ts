import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  countries: any;
  
  ngOnInit(): void {
  }

  constructor(private service:RegisterService, private router:Router) {
    
  this.service.getCountries().subscribe((data:any)=>{
    this.countries=data;
    console.log(data);
});
  }

  applyJob(applydata:any){
    console.log(applydata);
    // alert('Employee registered Sucessfully...')
    this.router.navigate(['userheader/viewAppliedUsers']);

    this.service.applyJob(applydata).subscribe(() => {
      
    });
  }


}
