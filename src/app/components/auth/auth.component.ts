import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
 username:string="";
 error:string="";
 trackLoginEvent:number=0;

 logIn(){
 if(this.username.length <1){
  this.error="Please fill in your username!";
  this.trackLoginEvent++;
 }
 else{
  localStorage.setItem('userToken',this.username);
  window.location.reload();

 }
 }
}
