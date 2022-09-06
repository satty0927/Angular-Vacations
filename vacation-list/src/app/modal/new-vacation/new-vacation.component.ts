import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsonVac from '../../../assets/vacations.json';
var fs = require('fs');


@Component({
  selector: 'app-new-vacation',
  templateUrl: './new-vacation.component.html',
  styleUrls: ['./new-vacation.component.css']
})
export class NewVacationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  name: string = '';
  myDate: Date = new Date;
  vacation:string = '';

  SaveVacation(){
    jsonVac.vacations.push({ "name" : this.name, "date" : this.myDate.toDateString(), "status" : this.vacation});

    this.router.navigate(['']);
  }

  CancelVacation(){
    this.router.navigate(['']);
  }
}

