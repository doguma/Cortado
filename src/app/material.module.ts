import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatExpansionModule ,MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [ MatGridListModule, MatTableModule, MatDividerModule, MatListModule, MatSidenavModule, MatCardModule, MatTabsModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [ MatGridListModule, MatTableModule, MatDividerModule, MatListModule, MatSidenavModule, MatCardModule, MatTabsModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}