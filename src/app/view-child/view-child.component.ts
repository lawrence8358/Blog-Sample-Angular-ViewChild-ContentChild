import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  childCount: number = 1;

  //累加計數器
  accumulate(): number {
    this.childCount++;
    return this.childCount;
  }
}
