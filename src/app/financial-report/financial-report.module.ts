import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FinancialReportComponent } from './financial-report.component';

@NgModule({
  imports: [SharedModule],
  declarations: [FinancialReportComponent],
  exports: [FinancialReportComponent],
})
export class FinancialReportModule {}
