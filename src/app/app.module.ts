import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
    NavbarComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule, 
    LayoutModule, 
 /*Import the necessary modules
 */    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
