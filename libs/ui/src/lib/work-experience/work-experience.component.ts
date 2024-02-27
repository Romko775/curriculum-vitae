import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWorkExperience } from '@curriculum-vitae/core';

@Component({
  selector: 'curriculum-vitae-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {
  @Input({ required: true }) workExperience: IWorkExperience[] = [];
}
