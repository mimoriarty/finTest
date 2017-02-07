import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Symbol } from "./symbol";
import { Config } from "../../config";

@Injectable()
export class SymbolListService {
    constructor(private http: Http) {}

    load() {
        let headers = new Headers();

        headers.append("Content-Type", Config.contentType);
        headers.append("JsonStub-User-Key", Config.jsonStubUserKey);
        headers.append("JsonStub-Project-Key", Config.jsonStubProjectKey);
        return this.http.get(
            Config.apiUrl,
            { headers : headers }
        )
        .map((response) => response.json())
        .map(data => {
            let symbolList = [];

            data.forEach((symbol) => {
                symbolList.push(new Symbol(
                    symbol.id,
                    symbol.name,
                    symbol.currency,
                    symbol.risk_family
                ));
            });
            
            return symbolList;
        })
        .catch(this.handleErrors);
    }

    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Observable.throw(error);
    }
}