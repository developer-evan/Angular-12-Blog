import { Component } from '@angular/core';
import  {UserDataService} from './services/user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'blog';
  // data = 'Angular 12 Blog App';
  // getValues(val: string) {
  //   // return 'Angular 12 Blog Application';
  //   // alert(name);
  //   console.warn(val);
  // }
  // num = 10;
  users: any;
  constructor(private userData: UserDataService) {
    this.userData.users().subscribe((data)=>{
      // console.warn(data);
      this.users = data;
    })
  }
}
