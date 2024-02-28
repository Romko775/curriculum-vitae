import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ContentBlockComponent,
  DatesBlockComponent,
  StackBlockComponent,
  TitledListComponent,
  WorkExperienceComponent
} from '@curriculum-vitae/ui';
import { DatePipe, KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { CV } from './CV';
import { MetadataService, PageMetadata } from '@curriculum-vitae/core';

@Component({
  standalone: true,
  imports: [RouterModule, ContentBlockComponent, NgForOf, KeyValuePipe, DatePipe, WorkExperienceComponent, StackBlockComponent, TitledListComponent, NgIf, DatesBlockComponent],
  providers: [MetadataService],
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly midDateFormat = 'MMM YYYY';
  readonly shortDateFormat = 'YYYY';
  readonly cv = CV;
  readonly defaultMetadata: PageMetadata = {
    title: 'Roman Yanush CV',
    description: this.cv.aboutMe,
    author: 'Roman Yanush',
    keywords: ['Angular Developer', 'Full stack developer', 'JavaScript', 'Angular', 'Angular Universal'],
    type: 'website'
  };

  constructor(private metadataService: MetadataService) {
    this.metadataService.defaultMetadata = this.defaultMetadata;
  }
}
