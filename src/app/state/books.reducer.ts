import { createReducer, on } from "@ngrx/store";
import { loadBooksSuccess } from "./books.actions";
import { Book } from "../models/book.model";


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(loadBooksSuccess, (state, { Book }) => [...Book])
)






