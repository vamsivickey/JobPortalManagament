import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private loginStatus: boolean;
  private logoutStatus: boolean;

  constructor(private httpClient:HttpClient,private toast: ToastrService) {
    this.loginStatus = false;
    this.logoutStatus = true;
  
  }


  successMail(email:any){
    console.log(email);
    // alert('Job  Posted Sucessfully...')
    this.toast.success('Selected Update Sent Successfully' , '')

    return this.httpClient.post('/sendResultEmail', email);
   }


   rejectMail(email:any){
    console.log(email);
    // alert('Job  Posted Sucessfully...')
    this.toast.success('Reject Update Sent Successfully' , '')

    return this.httpClient.post('/sendRejectedEmail', email);
   }


  // URLs for posting data to spring boot for storing in Database

    //company register
    registerCompany(company: any) {
      console.log(company);
      // alert('Company registered Sucessfully...')
      return this.httpClient.post('/registerCompany', company);
    }

    //user register
    registerUser(user: any) {
      console.log(user);
      // alert('User registered Sucessfully...')
      return this.httpClient.post('/registerUser', user);
    }

    ///Post Job 
    postjob(jobdata:any){
      console.log(jobdata);
      // alert('Job  Posted Sucessfully...')
      this.toast.success('Job Posted Successfully' , '')

      return this.httpClient.post('/registerJobPost', jobdata);
     }

  
    // Apply job
    applyJob(applydata:any){
      console.log(applydata);
      // alert('Job Applied  Sucessfully...')
      this.toast.success('Job Applied Successfully' , '')

      return this.httpClient.post('/registerJobApplication', applydata);
     }




  getLoginStatus(){
    return this.loginStatus;
   }

   getLogoutStatus(){
    return this.logoutStatus;
   }

   setLoginStatus(){
    // alert('Login service is called..')
    return this.loginStatus = true;
   }

   setLogoutStatus(){
    // alert('Logout service is called..')
    this.toast.success('Logout is successfully completed ' , '')

    return this.loginStatus = false;
   }


   getCountries(){
    return this.httpClient.get('https://restcountries.com/v2/all');
   }

   // Urls for getting information from spring boot 

   //Get All company Users who registered & check for login
   getAllCompanys(){
    return this.httpClient.get("/getAllCompanys");
   }

   

    // //Get  company Users by Id who registered & check for login
    // getCompanyById(companyId:any){
    //   return this.httpClient.get("/getCompanyById/"+ companyId);
    //  }
   




   //Get All Users who registered
   getAllUsers(){
    return this.httpClient.get("/getAllUsers");
   }
   
   //Get All Jobs Posted by company & user can apply
   getAllJobPosts(){
    return this.httpClient.get("/getAllJobPosts");
   }


   //Get All Jobs applications to company & user applied the job
   getAllJobApplications(){
    return this.httpClient.get("/getAllJobApplications");
   } 



    // Uls of upadte methods  in springboot
    // updateUser  , updateCompany , updateJobPost ,updateJobApplication ,



   // Edit User Profile Update
    UpdateUser(edituser: any){
      console.log(edituser);
      this.toast.success('Profile Updated Successfully' , '')
      return this.httpClient.put('/updateUser', edituser);
    }

    // Edit Company Profile Update
      UpdateCompany(editCompany: any){
      console.log(editCompany);
      this.toast.success('Profile Updated Successfully' , '')
      return this.httpClient.put('/updateCompany', editCompany);
    }  

    // Edit Job Profile Data
    updateJobPost(editJob: any){
      console.log(editJob);
      this.toast.success('Job Updated Successfully' , '')

      return this.httpClient.put('/updateJobPost', editJob);
    }

     // Edit Job Application Data
     updateJobApplication(editApplication: any, data:any){
      console.log(editApplication);
      return this.httpClient.put('/updateJobApplication'+data, editApplication);
    }

    // updateEmp(editObject: any) {
    //   return this.httpClient.put('updateEmployee', editObject);
    //  }



    // Delete Metods of Spring boot URL's 

    //   Delete User
    deleteUser(userId:any){
      return this.httpClient.delete('deleteUser/' + userId);
    }

    //  Delete Company User
    deleteCompany(companyId:any){
      this.toast.success('Job deleted Successfully' , '')
      return this.httpClient.delete('deleteCompany/' + companyId);
      
    }

     //  Delete Job Post
     deleteJob(jobId:any){
      
      return this.httpClient.delete('deleteJobPost/' + jobId);
    }

     //  Delete Job Application
     deleteApplication(applicationId:any){
      this.toast.success('Appliciantion Withdrawn Successfully' , '')
      return this.httpClient.delete('deleteJobApplication/' + applicationId);
    }




    // get by id of company


    getCompanyId(companyId:any){
      return this.httpClient.get("/getCompanyById/${companyId}");
    }


    
   //Get All company Users who registered & check for login
   getAllAppliedUsers(){
    return this.httpClient.get("/getAllJobApplications");
   }

    updatecompanyById(companyId:any , data:any) : Observable<any>{
      return this.httpClient.put('/updateCompany / $ {companyId}' , data );
    }


    contactedInfo(info:any){
      console.log(info);
      // alert('Your Query sent Sucessfully...')
      return this.httpClient.post('/registerContact', info);

    }




    //toaster messages
    Showerror(title:any, message:any) {
      this.toast.error (message, title,{

    });
    
    }
    Showwarning(title: any, message:any){ 
      this.toast.warning (message, title);
    }

    ShowSuccess(title: any, message: any){

      this.toast.success(message, title,{ 
        easing: 'ease-in', 
        easeTime: 1000
      });
    }

    Showinfo(title: any, message:any){ 
      this.toast.warning (message, title);
    }
    


}
