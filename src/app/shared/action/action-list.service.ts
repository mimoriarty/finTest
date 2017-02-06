import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Action } from "./action";

@Injectable()
export class ActionListService {
    load() {
        let actionsFakeList = [
            {
                "id": 9756,
                "name": "Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc",
                "currency": "EUR",
                "risk_family": "Balanced"
            },
            {
                "id": 42736,
                "name": "Allianz Fondsvorsorge 1977-1996 A Acc",
                "currency": "EUR",
                "risk_family": "Balanced"
            }
        ];
        let actionList = [];

        actionsFakeList.forEach((action) => {
            actionList.push(new Action(
                action.id,
                action.name,
                action.currency,
                action.risk_family
            ))
        });

        return actionList;
    }
}