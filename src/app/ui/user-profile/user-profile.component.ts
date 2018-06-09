import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  users: Observable<any[]>;

  constructor(public auth: AuthService) { 
  }

  ngOnInit(){
    this.users = this.auth.getData();
  }

  logout() {
    this.auth.signOut();
  }
}
