import { Book } from "../models/book.model";
import { retrievedBookList } from "./books.actions";
import * as fromReducer from "./books.reducer";

describe("BooksReducer", () => {
    describe("unknown action", () => {
        it("should return the default state", () => {
            const {initialState} = fromReducer;

            const action = {
                type: 'UNKOWN_ACTION'
            }

            const newState = fromReducer.booksReducer(initialState, action);

            expect(newState).toBe(initialState);
        })
    })


    describe("retrievedBookList", () => {
        it("should retrieve all books and udpate the state in immutable way", ()=> {
            const {initialState} = fromReducer;

            const newState: Array<Book> = [
                {
                    id: 'firstId',
                    volumeInfo: {
                        title: "First Title",
                        authors: ['First Author']
                    }
                }
            ];

            const action = retrievedBookList({Book: newState});
            const state = fromReducer.booksReducer(initialState, action);

            expect(state).toEqual(newState);
            expect(state).not.toBe(newState);

            

        });
    })

});