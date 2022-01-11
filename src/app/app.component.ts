import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating Shop';

  constructor(private router: Router) {
    /*setTimeout(() => {
      this.title = 'HALLO';
    }, 2000);*/

    router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(e => {
      console.log('START', e);
    });

    /*setTimeout(() => {
      // this.router.navigate();
      this.router.navigateByUrl('/books/list');
    }, 5000);*/
  }

  // BITTE NICHT MACHEN!
  onButtonClick() {
    this.router.navigateByUrl('/books/list');
  }
}
