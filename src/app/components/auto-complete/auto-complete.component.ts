import { Component, OnInit } from '@angular/core';
//import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  public items: any;
  constructor() {
  }

  ngOnInit() {
    this.items = [true, 'Two', 3];
  }

}
