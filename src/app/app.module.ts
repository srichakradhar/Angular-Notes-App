import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
// import { MaterialComponentsModule } from './material-components.module';
import { NoteCreateModule } from './note-create.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NoteComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoteCreateModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
