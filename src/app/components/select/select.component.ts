import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  public provinces: any;
  public provinces2: any;
  public provinces3: any;
  public a: any;
  public b: any;
  public c: any;
  //public exampleData: any;
public exampleData: Array<Select2OptionData>;
  constructor() { }

  ngOnInit() {
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
    this.provinces = [
      {
        id: 'multiple1',
        text: 'Multiple 1'
      },
      {
        id: 'multiple2',
        text: 'Multiple 2'
      },
      {
        id: 'multiple3',
        text: 'Multiple 3'
      },
      {
        id: 'multiple4',
        text: 'Multiple 4'
      }
    ];

  }

  changProvinces(){
    //alert(this.provinces);
    let a = this.a;
    this.provinces2 = [
      {
        id: '1',
        text: '1 > '+a
      },
      {
        id: '2',
        text: '2 > '+a
      },
      {
        id: '3',
        text: '3 > '+a
      },
      {
        id: '4',
        text: '4 > '+a
      }
    ];
    this.provinces3 = null;
  }

  changProvinces2(){
    //alert(this.provinces);
    let a = this.b;
    this.provinces3 = [
      {
        id: 'a',
        text: 'a > '+a
      },
      {
        id: 'b',
        text: 'b > '+a
      },
      {
        id: 'c',
        text: 'c > '+a
      },
      {
        id: 'd',
        text: 'c > '+a
      }
    ];
  }




}
