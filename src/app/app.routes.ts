import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './shared/list/list.component';
import { SymbolComponent } from './shared/symbol/symbol.component';


export const routes: Routes = [
    { path : '', component: ListComponent },
    { path : 'list', component: ListComponent },
    { path : 'symbol', component: SymbolComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);