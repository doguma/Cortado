import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../core/schedule.service';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  posts: Observable<any[]>;
  mon1: string;
  mon2: string;
  mon3: string;
  tue1: string;
  tue2: string;
  tue3: string;
  wed1: string;
  wed2: string;
  wed3: string;
  thu1: string;
  thu2: string;
  thu3: string;
  fri1: string;
  fri2: string;
  fri3: string;
  sat1: string;
  sat2: string;
  sat3: string;
  sun1: string;
  sun2: string;
  sun3: string;
  isManager = false;


  constructor(private scheduleService: ScheduleService, private auth: AuthService) { }

  ngOnInit() {
    this.posts = this.scheduleService.getData();
  }

  clickHandler() {
    this.scheduleService.createPost(this.mon1, this.mon2, this.mon3, this.tue1, this.tue2, this.tue3, this.wed1, this.wed2, this.wed3, this.thu1, this.thu2, this.thu3, this.fri1, this.fri2, this.fri3, this.sat1, this.sat2, this.sat3, this.sun1, this.sun2, this.sun3);
  }

  toggleForm() {
    this.isManager = !this.isManager;
  }
}
