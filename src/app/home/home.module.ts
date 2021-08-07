import { NgModule } from '@angular/core';

import { FinancialReportModule } from '../financial-report/financial-report.module';
import { ReportsModule } from '../reports/reports.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SharedModule, FinancialReportModule, ReportsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
