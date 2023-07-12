import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyheaderComponent } from './company/companyheader/companyheader.component';
import { CompanyloginComponent } from './company/companylogin/companylogin.component';
import { CompanyregisterComponent } from './company/companyregister/companyregister.component';
import { JobApplicationComponent } from './user/job-application/job-application.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { PostJobComponent } from './company/post-job/post-job.component';
import { ViewAppliedUsersComponent } from './company/view-applied-users/view-applied-users.component';
import { ViewJobsPostedComponent } from './company/view-jobs-posted/view-jobs-posted.component';
import { AboutComponent } from './home/about/about.component';
import { BlogComponent } from './home/blog/blog.component';
import { ContactComponent } from './home/contact/contact.component';
import { FindJobsComponent } from './home/find-jobs/find-jobs.component';
import { IndexComponent } from './home/index/index.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { JobListComponent } from './user/job-list/job-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserheaderComponent } from './user/userheader/userheader.component';
import { CompanyApplicationsComponent } from './company-applications/company-applications.component';
import { AppliedComponent } from './applied/applied.component';


const routes: Routes = [
  { path: '', component: IndexComponent, title:'Welcome | Job Portal Website' },
  { path: 'job-list', component: JobListComponent, title:'Job List' },
  { path: 'blog', component: BlogComponent, title:'Job List' },
  { path: 'about', component: AboutComponent, title:'About' },
  { path: 'contact', component: ContactComponent, title:'Contact' },
  { path: 'register', component: RegisterComponent, title:'Register' },
  { path: 'userheader', component: UserheaderComponent, title:'User Header'
  //  ,
  //     children:[
  //       { path: 'findjobs', component: JobListComponent, title:'User Find job' },
  //       { path: 'viewJobs', component: ViewJobsPostedComponent,  title:'View Jobs' },

  //     ]
},

{ path: 'userheader/manageUser', component: UserProfileComponent,   title:'User Profile' },
{ path: 'userheader/job-list', component: FindJobsComponent,   title:'Find Job' },
{ path: 'userheader/viewAppliedUsers', component: AppliedComponent,   title:'Apply Job' },


  { path: 'applyJob', component: JobApplicationComponent,   title:'Apply Job' },
  { path: 'postJob', component: PostJobComponent, title:'post Job' },
  { path: 'companyHeader', component: CompanyheaderComponent, title:'Company Header' },
  { path: 'compLogin', component: CompanyloginComponent, title:'Company Login' },
  { path: 'compRegister', component: CompanyregisterComponent, title:'Company Register' },
  { path: 'manageCompany', component: CompanyProfileComponent,  title:'Manage Company Profile' },
  { path: 'manageUser', component: UserProfileComponent,   title:'Manage User Profile' },
  { path: 'viewAppliedUsers', component: ViewAppliedUsersComponent, title:'View Applied Users' },
  { path: 'login', component: LoginComponent, title:'User Login' },
  { path: 'viewJobs', component: ViewJobsPostedComponent,   title:'View Jobs' },
  // { path: '**', component: PageNotFoundComponent, title:'404 page' },
  // canActivate:[UserGuard],
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const UserRoutingComponents = [
  BlogComponent,
  IndexComponent,
  AboutComponent,
  LoginComponent,
  JobListComponent,
  ContactComponent,
  RegisterComponent,
  PageNotFoundComponent
];