import { Symbol } from '../symbol/symbol';
import { SymbolService } from '../symbol/symbol.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SymbolService]
})
export class ListComponent implements OnInit {
  symbolList: Array<symbol> = [];

  constructor(private SymbolService: SymbolService, private Router: Router) { }

  ngOnInit() {
    this.SymbolService
        .load()
        .subscribe(loadedsymbols => {
          loadedsymbols.forEach((symbolObject, index) => {
            this.symbolList.unshift(symbolObject);
          });
        });
  }

  onSelected(symbolId: String) {
    this.Router.navigate(['symbol', {symbolId: symbolId}]);
  }
}