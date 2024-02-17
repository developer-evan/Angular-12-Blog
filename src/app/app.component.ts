import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  data = 'Angular 12 Blog App';
  getValues(val: string) {
    // return 'Angular 12 Blog Application';
    // alert(name);
    console.warn(val);
  }
  num = 10;
}
