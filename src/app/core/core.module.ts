import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NotifyService } from './notify.service';
import { NoticeService } from './notice.service';
import { ExtraProfileService } from './extra-profile.service';

@NgModule({
  providers: [AuthService, AuthGuard, NotifyService, NoticeService, ExtraProfileService ]
})
export class CoreModule { }
