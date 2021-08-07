import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ReportType } from '../ReportType';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
})
export class ReportCardComponent {
  @Input() report: ReportType = { id: '', description: '', title: '', icon: '' };

  constructor(private router: Router) {}

  showMore(): void {
    if(this.report.id){
      this.router.navigate([`/report/${this.report.id}`]);
    }
  }
}
