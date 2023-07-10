import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Input() title! : string;
  @Input() id: any;


  randomEmo=["🌲","🙌","🥰","😳","🗺️","😎","🤑","👾","🫢","🐢","🪸","🫀","🦖","🐼"];
  emo="";

  item:any;
  taskForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: DataServiceService) {
     
   }

  ngOnInit(): void {
    this.item=this.dataService.getData().filter(d=>d.id===this.id);
    if(this.item.length===0){
      this.taskForm = this.formBuilder.group({
        title: ['', Validators.required],
        progress: ['0', Validators.required]
      });
    }
   else{
    this.taskForm = this.formBuilder.group({
      title: [this.item[0].title, Validators.required],
      progress: [this.item[0].progress, Validators.required]
    });
   }



    console.log(this.item);
    
    
  }
  addTask(): void {
    if (this.taskForm.invalid) {
      alert("Please make sure your data input correctly!");
      return;
    }
    const uniqueId = uuidv4();
    const title = this.taskForm.value.title;
    const progress = this.taskForm.value.progress;
    this.emo=this.randomEmo[Math.floor(Math.random()*this.randomEmo.length)];
   
    // Create the task object
    const task = {
      id:uniqueId,
      emoji:this.emo,
      title: title,
      progress: progress
    };

    // Add the task to the data service
    this.dataService.addData(task);

    // Reset the form
    this.taskForm.reset();
    this.onCloseModal();

  }
  onCloseModal():void{
    this.closeModal.emit();
  }

  updateTask(){
    this.dataService.editData(this.item[0].id,this.taskForm.value);
    // this.onCloseModal();
  }
}
