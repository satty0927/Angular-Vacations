import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
