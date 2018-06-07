import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';
import { UserProfileComponent } from './ui/user-profile/user-profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserFormComponent } from './ui/user-form/user-form.component';
import { NoticeComponent } from './notice/notice.component';
import { ExtraProfileComponent } from './extra-profile/extra-profile.component';
import { ManOrWorkComponent } from './man-or-work/man-or-work.component';

import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'user-form', component: UserFormComponent },
  { path: 'notice', component: NoticeComponent, canActivate: [AuthGuard] },
  { path: 'extra-profile', component: ExtraProfileComponent },
  { path: 'man-or-work', component: ManOrWorkComponent },


  { path: 'ssr', component: SsrPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
