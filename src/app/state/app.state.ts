import { Book } from "../models/book.model";

export interface AppState {
    books: Array<Book>;
    collection: ReadonlyArray<string>;
}