import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../core/notice.service';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeComponent implements OnInit {

  posts: Observable<any[]>;
  title: string;
  content: string;

  constructor(private noticeService: NoticeService, private auth: AuthService) {
    console.log('hi' + auth.ManOrWork())
  }

  ngOnInit() {
    this.posts = this.noticeService.getData();
  }

  clickHandler() {
    this.noticeService.createPost(this.title, this.content);
    this.title = '';
    this.content = '';
  }

  deletePost(id: string) {
    this.noticeService.deletePost(id);
  }
}
