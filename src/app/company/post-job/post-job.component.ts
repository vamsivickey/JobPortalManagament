import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  countries:any;
  constructor(private service:RegisterService, private router:Router) { 
    this.service.getCountries().subscribe((data:any)=>{
      this.countries=data;
      console.log(data);
  });
    
  }

  ngOnInit(): void {
  }



  postJob(data:any){
    console.log(data);
    // alert('Employee registered Sucessfully...')
    this.router.navigate(['viewJobs']);
    this.service.postjob(data).subscribe(() => {
      
    });
  }

}
