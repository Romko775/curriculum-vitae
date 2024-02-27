import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ContentBlockComponent, DatesBlockComponent,
  StackBlockComponent,
  TitledListComponent,
  WorkExperienceComponent
} from '@curriculum-vitae/ui';
import { DatePipe, KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { CV } from './CV';


@Component({
  standalone: true,
  imports: [RouterModule, ContentBlockComponent, NgForOf, KeyValuePipe, DatePipe, WorkExperienceComponent, StackBlockComponent, TitledListComponent, NgIf, DatesBlockComponent],
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  readonly midDateFormat = 'MMM YYYY';
  readonly shortDateFormat = 'YYYY';

  readonly cv = CV;

  public openUrl(url: string): void {
    window.open(url, '_blank');
  }

}
