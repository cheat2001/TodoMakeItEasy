import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   isShowModal:boolean=false;


   openModal(): void {
    this.isShowModal = true;
  }
  closeModal(): void {
    this.isShowModal = false;
  }


  reset(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("myData");
    window.location.reload();

  }
}
