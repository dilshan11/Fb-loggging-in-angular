import { Component } from '@angular/core';
import { FacebookService } from './facebook.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sicailmedia';

  constructor(private facebook:FacebookService){
  }
  submitLogin(){
    this.facebook.submitLogin();
  }
  submitLoginout(){
    this.facebook.submitLoginout();
  }
  details(){
    this.facebook.details();
  }
  getimage(){
    this.facebook.getimage();
  }
}
