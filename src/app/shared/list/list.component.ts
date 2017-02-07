import { Symbol } from '../symbol/symbol';
import { SymbolListService } from '../symbol/list.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SymbolListService]
})
export class ListComponent implements OnInit {
  symbolList: Array<symbol> = [];

  constructor(private SymbolListService: SymbolListService) { }

  ngOnInit() {
    this.SymbolListService
        .load()
        .subscribe(loadedsymbols => {
          loadedsymbols.forEach((symbolObject, index) => {
            this.symbolList.unshift(symbolObject);
          });
        });
  }

  onSelected() {
    
  }
}