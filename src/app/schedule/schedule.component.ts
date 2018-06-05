import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  tiles = [
    {text: 'shifts', cols:1, rows: 1, color: 'lightgrey'},
    

    {text: 'Mon', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Tue', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Wed', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Thu', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Fri', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Sat', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Sun', cols: 1, rows: 1, color: 'lightgrey'},

    {text: 'morning: 6AM - 2:30PM', cols:1, rows: 4, color: 'blue'},
    
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},
    {text: 'Hanseul', cols: 1, rows: 4, color: 'lightyellow'},
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},
    {text: 'Hanseul', cols: 1, rows: 4, color: 'lightyellow'},
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},

    {text: 'noon: 8:30AM - 4:00PM', cols:1, rows: 4, color: 'blue'},
    
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},
    {text: 'Hanseul', cols: 1, rows: 4, color: 'lightyellow'},
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},
    {text: 'Hanseul', cols: 1, rows: 4, color: 'lightyellow'},

    
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},

    {text: 'evening: 6AM - 2:30PM', cols:1, rows: 4, color: 'blue'},    
    
    {text: 'Hanseul', cols: 1, rows: 4, color: 'lightyellow'},
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},
    {text: 'Hanseul', cols: 1, rows: 4, color: 'lightyellow'},
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Elias', cols: 1, rows: 4, color: 'lightbrown'},
    {text: 'Hannah', cols: 1, rows: 4, color: 'lightblue'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
