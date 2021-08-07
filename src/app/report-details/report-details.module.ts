import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReportDetailsComponent } from './report-details.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ReportDetailsComponent],
  exports: [ReportDetailsComponent],
})
export class ReportDetailsModule {}
