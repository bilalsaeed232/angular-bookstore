import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType  } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { GoogleBooksService } from "../core/books.service";
import * as bookActions from "./books.actions";
import { Book } from "../models/book.model";

@Injectable({
    providedIn: "root"
})
export class BookEffects {
    books$ = createEffect(
        () => this.actions$.pipe(
            ofType(bookActions.loadBooks),
            switchMap(() => 
                this.booksService.getBooks().pipe(
                    map((books: Book[]) => 
                        bookActions.loadBooksSuccess({ books }) 
                    ),
                    catchError((err) => 
                        of(bookActions.loadBooksFailure({ errorMsg: err.message }))
                    )
                )
            )
        )
    );



    constructor(
        private actions$: Actions,
        private booksService: GoogleBooksService
    ){}

}