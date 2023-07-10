import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

@Input() value : string | undefined;
@Input() class : string | undefined;


@Output() buttonClick = new EventEmitter<void>();


onClick(){
  this.buttonClick.emit();
}
}
