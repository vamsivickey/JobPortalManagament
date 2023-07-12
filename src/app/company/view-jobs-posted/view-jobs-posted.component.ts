import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

declare var jQuery : any;

@Component({
  selector: 'app-view-jobs-posted',
  templateUrl: './view-jobs-posted.component.html',
  styleUrls: ['./view-jobs-posted.component.css']
})
export class ViewJobsPostedComponent implements OnInit {


  ngOnInit(): void {
  }

  JobsList :any;

  editJob:any;
  term:any;

  constructor(private service:RegisterService) { 
    this.service.getAllJobPosts().subscribe((data:any)=>{
      console.log(data)
      this.JobsList=data;
    })

    this.editJob = {  jobId: '', applicationDate:'',applicationDeadline:'',categoryName:'',description:'', emailId:'', experience_details:'', jobLocation:'',  jobTitle:'' , jobType:'',min_Educational_req:'', noOfVacancies:'',salaryRange:"", skillsRequired:""};

  }




  deleteCompany(jobId: number){
    this.service.deleteJob(jobId).subscribe((data)=>{
    const index = this.JobsList.findIndex((job:any)=>{
        return job.jobId === jobId;
      });
      this.JobsList.splice(index,1);
    });
  }


  showEditPopup(job: any) {
    this.editJob = job;
    jQuery('#jobModel').modal('show');
  }


  updateJob() {
    this.service.updateJobPost(this.editJob).subscribe();
    // console.log(this.editCompany);
  }

  
}
