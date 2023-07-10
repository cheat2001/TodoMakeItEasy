import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() progress!: number;

 
  getCircumference(): number {
    const radius = 25;
    return 2 * Math.PI * radius;
  }

  getOffset(): number {
    const radius = 25;
    const circumference = this.getCircumference();
    const progressOffset = circumference - (this.progress / 100) * circumference;
    return progressOffset;
  }
}
