import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const createAuthor = async (author) => {
    console.log(author)
    const {data} = await $host.post('api/Author', {name: author.name})
    console.log(data)
    return data
}

export const fetchAuthors = async () => {
    const {data} = await $host.get('api/Author')
    return data
}

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/Genre', {name: genre.name})
    return data
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/Genre')
    return data
}

export const createBook = async (book, authorId, genreId) => {
    const {data} = await $authHost.post('api/Book', {
        title: book.title,
        description: book.description,
        imageUrl: book.imageUrl,
        price: book.price,
        publishedOn: book.publishedOn 
    }, {params: {authorId, genreId}})
    return data
}

export const updateBook = async (book, authorId, genreId) => {
    console.log(authorId);
    console.log(genreId);
    console.log(book)
    const {data} = await $authHost.put(`api/Book/${book.id}`, {
        id: book.id,
        title: book.title,
        description: book.description,
        imageUrl: book.imageUrl,
        price: book.price,
        publishedOn: book.publishedOn 
    }, {params: {authorId, genreId}})
    return data
}

export const fetchBooks = async () => {
    const {data} = await $host.get('api/Book')
    console.log(data);
    return data
}

export const fetchBook = async (id) => {
    const {data} = await $host.get('api/Book/' + id)
    return data
}

export const deleteBook = async (id) => {
    const {data} = await $authHost.delete('api/Book/' + id)
    return data
}