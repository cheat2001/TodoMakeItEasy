import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private localStorageKey = 'myData';
  private data: any[]=[];

  constructor() {
    const savedData = localStorage.getItem(this.localStorageKey);
  this.data = savedData ? JSON.parse(savedData) : [];

  }


  getData(): any[] {
    return this.data;
  }

  saveData(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
  }

  addData(item: any): void {
    console.log(item);
    
    this.data.push(item);
    this.saveData();
  }

  editData(index: number, item: any): void {
    this.deleteData(index);
    this.saveData();
    const task = {
      id:index,
      title: item.title,
      progress: item.progress
    };

    this.addData(task);
    this.saveData();

    // console.log(this.data.find(d=>d.id===index));
    
  }

  deleteData(index: number): void {
    this.data = this.data.filter(d=>d.id!==index);
    this.saveData();
  }
}
