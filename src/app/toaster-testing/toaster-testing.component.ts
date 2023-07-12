import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster-testing',
  templateUrl: './toaster-testing.component.html',
  styleUrls: ['./toaster-testing.component.css']
})
export class ToasterTestingComponent {


  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  
}
