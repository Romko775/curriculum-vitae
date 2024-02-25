import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStackItem } from '@curriculum-vitae/core';

@Component({
  selector: 'curriculum-vitae-stack-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack-badge.component.html',
  styleUrl: './stack-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackBadgeComponent {
  @Input({ required: true }) stack?: IStackItem;
}
