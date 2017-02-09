import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from './comment';

@Component({
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment: Comment;

  constructor(private Comment: Comment) {}

  ngOnInit() {

  }

}
