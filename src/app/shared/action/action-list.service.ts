import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Action } from "./action";
import { Config } from "../../config";

@Injectable()
export class ActionListService {
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
            let actionList = [];

            data.forEach((action) => {
                actionList.push(new Action(
                    action.id,
                    action.name,
                    action.currency,
                    action.risk_family
                ));
            });
            
            return actionList;
        })
        .catch(this.handleErrors);
    }

    handleErrors(error) {
        console.log(JSON.stringify(error));
        return Observable.throw(error);
    }
}