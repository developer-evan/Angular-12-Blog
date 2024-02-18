import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title = 'Counter App';
  count = 0;

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
