import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-vacation',
  templateUrl: './new-vacation.component.html',
  styleUrls: ['./new-vacation.component.css']
})
export class NewVacationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SaveVacation(){
    this.router.navigate(['']);
  }

  CancelVacation(){
    this.router.navigate(['']);
  }

}
