import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import jsonVac from '../../../assets/vacations.json';
import axios from 'axios';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  values : any;
  status : string = '';


  constructor() {  }
  vacations : any;
  ngOnInit(): void {
    var res = (async () => {
      await this.getThis()})();
    console.log(this.vacations);
  }

  getThis(){
    const config = {
      headers:{
        'content-type': 'application/json',
        'x-apikey': '6317856c0b7c265b2a0e7821',
        'cache-control': 'no-cache'
      }
    };
    const url = "https://vacations-df8f.restdb.io/rest/vacation-list";
    
    axios.get(url, config)
      .then(res=> 
        {
          this.vacations = res.data;
          console.log(this.vacations);
        })
      .catch(err=> console.log(err))
  }

}
