import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vacation-list';

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
