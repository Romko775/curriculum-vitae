import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateAlike } from '@curriculum-vitae/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'curriculum-vitae-dates-block',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './dates-block.component.html',
  styleUrl: './dates-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatesBlockComponent {
  @Input({ required: true }) dates?: [DateAlike, DateAlike];
  @Input() dateFormat = 'MMM YYYY';

  private destroyRef = inject(DestroyRef);
  private translate = inject(TranslateService);
  private cdr = inject(ChangeDetectorRef);

  constructor(private datePipe: DatePipe) {
    this.translate.onLangChange
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.cdr.markForCheck())
      )
      .subscribe();
  }

  public getDate(dates?: [DateAlike, DateAlike]): string | null {
    if (!dates) return null;
    return dates
      .map(date => {
        if (!date) return this.translate.instant('Present');
        return this.datePipe.transform(date, this.dateFormat, undefined, this.translate.currentLang);
      })
      .filter(Boolean)
      .join(' - ');
  }
}
