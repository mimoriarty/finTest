import { Action } from '../action/action';
import { ActionListService } from '../action/action-list.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ActionListService]
})
export class ListComponent implements OnInit {
  actionList: Array<Action> = [];

  constructor(private ActionListService: ActionListService) { }

  ngOnInit() {
    this.ActionListService.load()
        .subscribe(loadedActions => {
          loadedActions.forEach((actionObject, index) => {
            this.actionList.unshift(actionObject);
          });
        });
    /*this.ActionListService.load()
      .forEach((actionObject, index) => {
        this.actionList.push(actionObject);
      });*/
  }

}
