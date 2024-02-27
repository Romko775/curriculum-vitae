import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateAlike } from '@curriculum-vitae/core';

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

  constructor(private datePipe: DatePipe) {
  }

  public getDate(dates?: [DateAlike, DateAlike]): string | null {
    if (!dates) return null;
    return dates
      .map(date => {
        if (!date) return 'Present';
        return this.datePipe.transform(date, this.dateFormat);
      })
      .join(' - ');
  }
}
