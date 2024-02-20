import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title = 'Counter App';
  show = false;
  count = 0;
  color = 'green';
  users = ['John', 'Jane', 'Jack', 'Jill'];
  userDetails = [ {name: 'John', age: 25}, {name: 'Jane', age: 22}, {name: 'Jack', age: 30}, {name: 'Jill', age: 28} ];
green: any;
red: any;

  counter(
    type: string
  ) {
    // this.count++;
    type === 'add' ? this.count++ : this.count--;
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
