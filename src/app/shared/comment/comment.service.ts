import { Injectable } from "@angular/core";
import { Comment } from "./comment";
import { LocalStorageService } from "angular-2-local-storage";

@Injectable()
export class CommentService {
    public loadedComments: Array<Comment> = [];
    
    constructor(
        private localStorageService: LocalStorageService
        ) {}

    setComments(commentsList: Array<Comment>) {
        return this.localStorageService.set('fintest-comments', commentsList);
    }
    
    readComments(): Array<Comment> {
        let localComments: any = this.localStorageService.get('fintest-comments');

        if (localComments) {
            localComments.forEach(localComment => {
                this.loadedComments.unshift(localComment);
            });
        }

        return this.loadedComments.sort((a, b) => a.id - b.id);
    }
}