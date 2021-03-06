import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
