import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ContentBlockComponent } from '@curriculum-vitae/ui';
import { DatePipe, KeyValuePipe, NgForOf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ContentBlockComponent, NgForOf, KeyValuePipe, DatePipe],
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curriculum-vitae';

  readonly midDateFormat = 'MMM YYYY';
  readonly shortDateFormat = 'YYYY';

  readonly technicalSkills = [
    {
      title: 'Frontend',
      skills: [
        'JavaScript, TypeScript, OOP',
        'Angular (v4-11), Vue.js (v2), jQuery, Ajax',
        'CSS (LESS, SCSS), Bootstrap, Material UI',
        'Grid, Flexbox',
        'NPM',
        'RxJS',
        'Adaptive, Responsive'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Python 3, Django (inc. DRF)',
        'NodeJS, Express, Nest JS',
        'PostgreSQL, MySQL, SQLite'
      ]
    },
    {
      title: 'Utils',
      skills: [
        'Docker, Docker-compose',
        'Nginx',
        'Git',
        'Jira, Confluence, Trello'
      ]
    },
    {
      title: 'Some experience in',
      skills: [
        'Electron.js, Cordova, Ionic',
        'Flutter, Dart'
      ]
    }
  ];
}
