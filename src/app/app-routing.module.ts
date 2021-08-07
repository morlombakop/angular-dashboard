import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReportDetailsComponent} from './report-details/report-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'report/:id', component: ReportDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
