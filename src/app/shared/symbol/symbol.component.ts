import { Component, OnInit } from "@angular/core";
import { Router, Params, ActivatedRoute } from "@angular/router";
import { SymbolService } from './symbol.service';
import { ChartComponent } from '../chart/chart.component';

@Component({
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.scss'],
  providers: [SymbolService, ChartComponent]
})
export class SymbolComponent {
  symbol: Object = {};
  currency: Object = {};
  region: String;
  risk_family: String;
  sector: String;

  constructor(
    private SymbolService: SymbolService, 
    private activatedRoute: ActivatedRoute,
    private ChartComponent: ChartComponent) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let symbolId = params['symbolId'];

        this.loadSymbol(symbolId);
      });
  }

  loadSymbol(symbolId) {
    this.SymbolService
        .getSymbol(symbolId)
        .subscribe(loadedSymbol => {
          this.symbol = loadedSymbol;
          this.currency = loadedSymbol.currency;
          this.region = this.parseObjectToString(loadedSymbol.region, 'name', null);
          this.risk_family = this.parseObjectToString(loadedSymbol.risk_family, 'name', null);
          this.sector = this.parseObjectToString(loadedSymbol.sector, 'name', null);
          this.ChartComponent.ngAfterViewInit(loadedSymbol);
        })
  }

  private parseObjectToString(obj: any, prop: String, array: Array<String>): any {
    if (!array) {
      var array: Array<String> = [];
    }
    for (let reference in obj) {
      if (reference === prop){
        array.push(obj.name);
      }
      if (typeof obj[reference] === "object") {
        if (obj[reference] !== null) {
          this.parseObjectToString(obj[reference], prop, array)
        }
        else {
          return array;
        }
      }
    }
    
    return array.join('/');
  }
}