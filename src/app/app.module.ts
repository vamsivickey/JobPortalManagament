import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, UserRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatSelectModule} from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';

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
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { JobListComponent } from './user/job-list/job-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserheaderComponent } from './user/userheader/userheader.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { LoaderComponent } from './home/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { TestComponent } from './test/test.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { AppliedComponent } from './applied/applied.component';




@NgModule({
  declarations: [
    AppComponent,
    
    UserRoutingComponents,
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    JobListComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    CompanyregisterComponent,
    CompanyloginComponent,
    UserheaderComponent,
    CompanyheaderComponent,
    JobApplicationComponent,
    PostJobComponent,
    CompanyProfileComponent,
    ViewJobsPostedComponent,
    ViewAppliedUsersComponent,
    UserProfileComponent,
    FindJobsComponent,
    TestComponent,
    AppliedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    
    Ng2SearchPipeModule,


    MatSortModule,
    MatTableModule,
    MatFormFieldModule,    
    // MatInputModule,
    CommonModule,


    ToastrModule.forRoot({
      positionClass: 'toast-center-center',
      preventDuplicates: true,
      timeOut: 5000,
      // easing:'ease-in',
      // easeTime:1000
    })



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
