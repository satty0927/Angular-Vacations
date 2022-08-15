import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-vacation-button',
  templateUrl: './new-vacation-button.component.html',
  styleUrls: ['./new-vacation-button.component.css']
})
export class NewVacationButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
