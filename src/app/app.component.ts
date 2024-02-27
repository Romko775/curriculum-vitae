import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ContentBlockComponent, WorkExperienceComponent } from '@curriculum-vitae/ui';
import { DatePipe, KeyValuePipe, NgForOf } from '@angular/common';
import { CV } from './CV';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ContentBlockComponent, NgForOf, KeyValuePipe, DatePipe, WorkExperienceComponent],
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curriculum-vitae';

  readonly midDateFormat = 'MMM YYYY';
  readonly shortDateFormat = 'YYYY';

  readonly cv = CV;

}
