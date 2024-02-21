import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title ="Call API"

  users: any;
  constructor(private userData: UserDataService) {
    this.userData.users().subscribe((data)=>{
      // console.warn(data);
      this.users = data;
    })
  }

  getUserFormData(data: any){
    // console.warn(data);
    this.userData.saveUser(data).subscribe((data)=>{
      console.warn(data);
    })
  }

  ngOnInit(): void {
  }

}
