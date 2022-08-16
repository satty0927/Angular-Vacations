import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import jsonVac from '../../../assets/vacations.json';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  data : any;
  status : string = '';


  constructor() {  }
  vacations : any = jsonVac.vacations;
  
  ngOnInit(): void {
  }

}
