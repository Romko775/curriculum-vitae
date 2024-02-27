import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateAlike, IWorkExperience } from '@curriculum-vitae/core';
import { StackBlockComponent } from '../stack-block/stack-block.component';

@Component({
  selector: 'curriculum-vitae-work-experience',
  standalone: true,
  imports: [CommonModule, StackBlockComponent],
  providers: [DatePipe],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {
  @Input({ required: true }) workExperience: IWorkExperience[] = [];
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
