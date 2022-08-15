import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewerComponent } from './comp/viewer/viewer.component';
import { NewVacationComponent } from './modal/new-vacation/new-vacation.component';

const routes: Routes = [
  {path: '', component: ViewerComponent},
  {path: 'new-vacation', component: NewVacationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
