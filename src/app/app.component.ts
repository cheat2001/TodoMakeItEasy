import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  isAuth=false;
   
  ngOnInit(): void {
    if(localStorage.getItem('userToken')!==null){
      this.isAuth=true;
    }
    
  }
}
