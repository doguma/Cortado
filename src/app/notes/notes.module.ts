import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesService } from './notes.service';

@NgModule({
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: [NotesListComponent, NoteDetailComponent],
  providers: [NotesService]
})
export class NotesModule { }
