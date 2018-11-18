import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private prefix:any;
  private tables:any;
  constructor() { }

  ngOnInit() {
    this.prefix = ["นาย","นางสาว"];
    this.tables = [
                    {
                      prefix: 'นางสาว',
                      name: 'aaaaa',
                      sername: 'bbbb',
                    }
                  ];
  }

  addData(){
    this.tables.push({
      prefix: '',
      name: '',
      sername: '',
    });
  }

  delData(i){
    //alert(i);
    this.tables.splice(i,1);
  }

}
