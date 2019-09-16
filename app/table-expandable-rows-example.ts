import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';
import { MatIconModule, MatButtonModule } from "@angular/material";


export interface PeriodicElement {
  name: string;
  station: string;
  category: string;
  model: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    station: 'Germany',
    name: 'Lightweight bucket',
    category: 'Wheel Loader',
    model: 'WL12',
    description: 
    `weight : 1320kg 
     L x W X H : 3,090 x 1,180 x 2,580
     Engine Perfomance : 18.9 kW`
  }, {
    station: 'Poland',
    name: 'Excavator buckets',
    category: 'Excavator',
    model: 'EB32',
    description: 
    `weight : 1120kg 
     L x W X H : 1111 x 2222 x 3333
     Engine Perfomance : 8.9 kW`
  }, {
    station: 'Austria',
    name: 'Dozing bucket',
    category: 'Telehandler',
    model: 'TH412',
    description: 
    `weight : 1020kg 
     L x W X H : 1211 x 2232 x 3433
     Engine Perfomance : 5.9 kW`
  }, {
    station: 'Czechia',
    name: 'Wheel Dumpers',
    category: 'Dumpers',
    model: 'WD322',
    description: 
    `weight : 920kg 
     L x W X H : 811 x 1232 x 1433
     Engine Perfomance : 3.9 kW`
  }, {
    station: 'Switzerland',
    name: 'Hydronic Surface Heaters',
    category: 'Heaters',
    model: 'HSC',
    description: 
    `weight : 620kg 
     L x W X H : 611 x 432 x 233
     Engine Perfomance : 3.9 kW`
  }
];


/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsExample {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'category', 'model', 'station'];
  expandedElement: PeriodicElement;
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */