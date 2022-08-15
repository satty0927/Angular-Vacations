import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  dbBaseAddress:string = "";
  constructor() { 
    this.dbBaseAddress = "https://vacations-df8f.restdb.io/rest/vacation-list";
  }

  ngOnInit(): void {
    this.GetVacations();
  }

  GetVacations(){
    axios.get<GetVacationResponse>(this.dbBaseAddress,
      {
        headers: {
          'Access-Control-Allow-Origin':'*',
          'content-type': 'application/json',
          'x-apikey': 'a43fde0c527865cded147291a98cc4421a89b'
        },
      },
    ).then((resp) => {
      console.log(resp.data);
      return resp.data;
    });
  }

  vacations = [
    {
      name:'Satyam',
      date: '27/07/2022',
      status: 'CONFIRMED'
    },
    {
      name:'Subham',
      date: '27/07/2022',
      status: 'TENTATIVE'
    },
    {
      name:'Rishabh',
      date: '27/07/2022',
      status: 'CONFIRMED'
    },
    {
      name:'Srini',
      date: '27/07/2022',
      status: 'TENTATIVE'
    },
    {
      name:'Asit',
      date: '27/07/2022',
      status: 'CONFIRMED'
    }
  ]

}

type User = {
        _id : number ,
        Name : string,
        VacationDate: Date,
        IsVactionConfirmed: boolean
}

type GetVacationResponse = {
  data: User[];
};
