import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ContentBlockComponent } from '../../libs/ui/src/lib/content-block/content-block.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ContentBlockComponent],
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curriculum-vitae';
}
