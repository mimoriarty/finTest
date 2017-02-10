import { Component, OnInit } from "@angular/core";
import { Router, Params, ActivatedRoute } from "@angular/router";
import { SymbolService } from './symbol.service';
import { CommentService } from '../comment/comment.service';
import { ChartComponent } from '../chart/chart.component';
import { NgForm } from '@angular/forms';
import { Comment } from '../comment/comment';

@Component({
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.scss'],
  providers: [SymbolService, CommentService, ChartComponent, NgForm]
})
export class SymbolComponent {
  public symbol: Object = {};
  public currency: Object = {};
  public region: String;
  public risk_family: String;
  public sector: String;
  public comment: Comment;
  public comments: Array<Comment> = [];
  public form: any;
  private setValid: Boolean;
  private commentLastIndex: number;

  constructor(
    private SymbolService: SymbolService, 
    private CommentService: CommentService, 
    private activatedRoute: ActivatedRoute,
    private ChartComponent: ChartComponent,
    private NgForm: NgForm) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let symbolId = params['symbolId'];
        this.initForm();
        this.loadSymbol(symbolId);
      });
    this.loadComments();
  }

  loadComments() {
    this.comments.length = 0;
    this.comments = this.CommentService.readComments()
    this.commentLastIndex = this.comments.length > 0 ? this.getLastIndex() + 1 : 0;
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

  onSubmit(f: NgForm, id: Number) {
    this.form = NgForm;
    if (f.valid) {
      let date = new Date()
      this.comment.id = this.commentLastIndex;
      this.comment.date = date.getTime();
      this.comment.subject = id;
      this.comments.push(this.comment)
      this.setValid = this.CommentService.setComments(this.comments);
      this.resetForm(this.setValid);
      this.commentLastIndex++;
    }
  }

  editComment() {
    this.updateComments();
  }

  deleteComment(comment: Comment) {
    let delIndex;

    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].id === comment.id) {
        delIndex = i;
      }
    }

    this.comments.splice(delIndex, 1);
    this.updateComments;
  }

  private updateComments() {
    this.CommentService.setComments(this.comments);
    this.loadComments();
  }

  private getLastIndex(): number {
    return this.comments.map(item => {
      return item.id;
    })[this.comments.length - 1];
  }

  private initForm() {
    this.comment = {
      id: undefined,
      subject: undefined,
      content: '',
      date: undefined
    }
  }

  private resetForm(setValid: Boolean) {
    if (setValid) {
      this.initForm();
    }
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