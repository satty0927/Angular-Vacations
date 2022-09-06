import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-card',
  templateUrl: './vacation-card.component.html',
  styleUrls: ['./vacation-card.component.css']
})
export class VacationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initials = this.GetInitials(this.vacation.Name);
  }

  @Input()
  vacation: any;
  initials: string = 'Name';

  public GetInitials(name: string){
    return name.substring(0,2).toLocaleUpperCase();
  }
}
