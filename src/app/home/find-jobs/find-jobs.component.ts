import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.css']
})
export class FindJobsComponent implements OnInit {

  JobsList :any;
  term:any;

  // matsort:any;

  constructor(private service:RegisterService) { 

    this.service.getAllJobPosts().subscribe((data:any)=>{
      console.log(data)
      this.JobsList=data
      // this.JobsList= new MatTableDataSource(data);
      // this.JobsList.sort=this.matsort
    })


  }

  ngOnInit(): void {
  }

  // filter(e:any){
  //   this.JobsList.filter=e.target.value;
  // }

}
