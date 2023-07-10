import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  items: any; 
  username:string | null ="";
  constructor(private data: DataServiceService){}
  ngOnInit(): void {
    this.items = this.data;
    this.username=localStorage.getItem('userToken');
  }
   

  


}
