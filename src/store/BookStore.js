import { makeAutoObservable } from "mobx"

export default class BookStore {
    constructor() {
        this._authors = []
        this._genres = []
        this._books = []
        this._selectedGenre = {}
        this._selectedAuthor = {}
        makeAutoObservable(this)
    }

    setAuthors(authors) {
        this._authors = authors
    }

    setGenres(genres) {
        this._genres = genres
    }

    setBooks(books) {
        this._books = books
    }

    setSelectedGenre(genre) {
        this._selectedGenre = genre
    }

    setSelectedAuthor(author) {
        this._selectedAuthor = author
    }

    get authors() {
        return this._authors
    }

    get genres() {
        return this._genres
    }

    get selectedGenre() {
        return this._selectedGenre
    }

    get selectedAuthor() {
        return this._selectedAuthor
    }

    get books() {
        return this._books
    }
}