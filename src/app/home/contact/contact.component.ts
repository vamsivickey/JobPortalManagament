import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  clientName: string = '';
  emailId: string = '';
  issueSubject: string = '';
  message: string = '';

  ngOnInit(): void {}

  constructor(private service:RegisterService) {

  }

  contactForm(contactinfo: any) {
    console.log(contactinfo);
    // alert('Message information sent Sucessfully...')
    this.service.ShowSuccess('Your Query sent successfully' , 'Our team will contact you soon ')
    this.service.contactedInfo(contactinfo).subscribe(() => {
      // this.router.navigate(['login']);
    });
  }





  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    // myFormData.append('name', this.name);
    // myFormData.append('email', this.email);
    // myFormData.append('subject', this.subject);
    // myFormData.append('message', this.message);
    // this.http
    //   .post('http://127.0.0.1:8000/api/addJobs', myFormData, {
    //     headers: headers,
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }





}
