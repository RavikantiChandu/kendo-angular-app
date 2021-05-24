import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ColumnComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'kendo-custom-grid-column',
  templateUrl: './kendo-custom-grid-column.compenent.html'
})
export class DiCustomGridColumnComponent {
  @ViewChild(ColumnComponent) public realColumn: ColumnComponent | undefined;
  @Input() field: string = '';
  @Input() title: string = '';
  @Input() width: number = 0;
  @Input() filter : any;
  @Input() format : any;

  
  constructor() { }

  ngAfterViewInit() {
    console.log(this.realColumn)
  }

}
