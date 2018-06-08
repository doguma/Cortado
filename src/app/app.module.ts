import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/ui.module';
import { NotesModule } from './notes/notes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';

import { MaterialModule } from './material.module';
import { ScheduleComponent } from './schedule/schedule.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticeComponent } from './notice/notice.component';
import { ExtraProfileComponent } from './extra-profile/extra-profile.component';
import { ManOrWorkComponent } from './man-or-work/man-or-work.component';
import { AddProductComponent } from './notes/add-product/add-product.component';
import { EditProductComponent } from './notes/edit-product/edit-product.component';

import { TimeAgoPipe } from 'time-ago-pipe'

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    NoticeComponent,
    ExtraProfileComponent,
    ManOrWorkComponent,
    AddProductComponent,
    EditProductComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    UiModule,
    NotesModule,
    UploadsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
