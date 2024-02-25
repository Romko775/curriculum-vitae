import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'curriculum-vitae-content-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentBlockComponent {
  @Input({required: true}) title = '';
}
