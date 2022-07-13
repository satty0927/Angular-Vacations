import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVacationButtonComponent } from './new-vacation-button.component';

describe('NewVacationButtonComponent', () => {
  let component: NewVacationButtonComponent;
  let fixture: ComponentFixture<NewVacationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVacationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVacationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
