import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'mtd-root',
  template: `<mtd-nx-welcome></mtd-nx-welcome> <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {
  title = 'client';
}
