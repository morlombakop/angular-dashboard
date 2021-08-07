import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './reports.component';
import { ReportCardComponent } from './report-card/report-card.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ReportsComponent, ReportCardComponent],
  exports: [ReportsComponent],
})
export class ReportsModule {}
