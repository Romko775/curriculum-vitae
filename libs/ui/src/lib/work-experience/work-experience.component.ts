import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateAlike, IWorkExperience } from '@curriculum-vitae/core';
import { StackBlockComponent } from '../stack-block/stack-block.component';
import { TitledListComponent } from '../titled-list/titled-list.component';
import { DatesBlockComponent } from '../dates-block/dates-block.component';

@Component({
  selector: 'curriculum-vitae-work-experience',
  standalone: true,
  imports: [CommonModule, StackBlockComponent, TitledListComponent, DatesBlockComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {
  @Input({ required: true }) workExperience: IWorkExperience[] = [];
  @Input() dateFormat = 'MMM YYYY';
}
