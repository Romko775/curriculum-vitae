import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
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
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, ContentBlockComponent, NgForOf, KeyValuePipe, DatePipe, WorkExperienceComponent, StackBlockComponent, TitledListComponent, NgIf, DatesBlockComponent, NgSelectComponent, ReactiveFormsModule, TranslateModule],
  providers: [MetadataService],
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

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

  protected readonly locales = [
    { id: 'en', label: 'English' },
    { id: 'uk', label: 'Українська' },
  ]

  localeCtrl = new FormControl()

  constructor(private metadataService: MetadataService) {
    this.metadataService.defaultMetadata = this.defaultMetadata;
  }

  public ngOnInit(): void {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.localeCtrl.setValue(this.translate.currentLang);

    this.localeCtrl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((lang) => this.translate.use(lang)),
        tap((lang) => localStorage.setItem('lang', lang)),
        tap(() => this.cdr.markForCheck())
      )
      .subscribe()
  }

  public print(): void {
    window.print();
  }

  public get zone() {
    return undefined;
  }

  public get lang(): string {
    return this.translate.currentLang;
  }
}
