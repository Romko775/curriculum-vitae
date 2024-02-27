import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStackItem } from '@curriculum-vitae/core';
import { StackBadgeComponent } from '../stack-badge/stack-badge.component';

@Component({
  selector: 'curriculum-vitae-stack-block',
  standalone: true,
  imports: [CommonModule, StackBadgeComponent],
  templateUrl: './stack-block.component.html',
  styleUrl: './stack-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackBlockComponent {
  @Input({ required: true }) stackItems: IStackItem[] = [];
}
