import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'curriculum-vitae-titled-list',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './titled-list.component.html',
  styleUrl: './titled-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitledListComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) items: string[] = [];
}
