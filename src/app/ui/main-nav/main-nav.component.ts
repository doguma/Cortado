import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {


  constructor(private auth: AuthService) { }


}
