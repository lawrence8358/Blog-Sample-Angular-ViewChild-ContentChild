import { ViewChildComponent } from './view-child/view-child.component';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*== ViewChild複數的使用方式 開始==*/
  @ViewChildren(ViewChildComponent) views: QueryList<ViewChildComponent>;
  viewChildControls = [];
  parentCount: number = 1;

  ngAfterViewInit(): void { //當有多個相同的ViewChild存在時，則必須要在此事件之後才可以呼叫。
    this.viewChildControls = this.views.toArray();
  }

  onParentClick() {
    for (let item of this.viewChildControls) {
      this.parentCount = item.accumulate();
    }
  }

  onViewChildReset() {
    for (let item of this.viewChildControls) {
      item.childCount = 0;
    }
    this.parentCount = 0;
  }
  /*== ViewChild複數的使用方式 結束==*/

  /*== ViewChild單數的使用方式 開始==*/
  /*
  //ViewChild 好處就是可以直接調用Child View公開的屬性 & 方法，可以不須透過 @Input @Output的方式
  @ViewChild(ViewChildComponent) viewChildControl: ViewChildComponent;


  parentCount: number = 1;

  onParentClick() {
    this.parentCount = this.viewChildControl.accumulate();
  }

  onViewChildReset() {
    this.viewChildControl.childCount = 0;
    this.parentCount = this.viewChildControl.childCount;
  }
  */
  /*== ViewChild單數的使用方式 結束==*/

}
