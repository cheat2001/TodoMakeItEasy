import { Component, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {



   isShowModal:boolean=false;
   item:any;
  constructor(private dataService: DataServiceService){
    
  }

  @Input() data:any;


  editTask(id:any){
    this.item=this.dataService.getData().filter(d=>d.id===id);
    this.openModal();
  }

  deleteTask(id:any){
    this.dataService.deleteData(id);
  }
  openModal(): void {
    this.isShowModal = true;
  }
  closeModal(): void {
    this.isShowModal = false;
  }
}
