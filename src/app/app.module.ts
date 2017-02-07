import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './shared/list/list.component';
import { FilterList } from './filterList';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ListComponent]
})
export class AppModule { }
