import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  public result: any;
  ngOnInit(): void {
      
  }
  title = 'Reusable Kendo UI Grid';

  
  public gridData: any[] = products; 
}
