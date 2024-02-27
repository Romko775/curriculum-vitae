import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'curriculum-vitae-titled-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titled-list.component.html',
  styleUrl: './titled-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitledListComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) items: string[] = [];
}
