import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReportType } from './ReportType';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  reports: ReportType[] = [
    {
      id: 'report-1',
      title: 'Report title 1',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-menu',
    },
    {
      id: 'report-2',
      title: 'Report title 2',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-facebook',
    },
    {
      id: 'report-3',
      title: 'Report title 3',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-android-auto',
    },
    {
      id: 'report-4',
      title: 'Report title 4',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-angular',
    },
    {
      id: 'report-5',
      title: 'Report title 5',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-file',
    },
    {
      id: 'report-5',
      title: 'Report title 5',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-application',
    },
    {
      id: 'report-6',
      title: 'Report title 6',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      icon: 'mdi-atom',
    }
  ];
}
