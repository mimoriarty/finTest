import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from "angular-2-local-storage";


import { AppComponent } from './app.component';
import { ListComponent } from './shared/list/list.component';
import { SymbolComponent } from './shared/symbol/symbol.component';
import { ChartComponent } from './shared/chart/chart.component';
import { FilterList } from './filterList';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SymbolComponent,
    ChartComponent,
    FilterList
  ],
  imports: [
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage',
            notifyOptions : {setItem: true, removeItem:true}
        }),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
