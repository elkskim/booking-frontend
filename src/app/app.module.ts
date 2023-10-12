import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
