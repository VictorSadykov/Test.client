import { createBook, fetchAuthors, fetchBooks, fetchGenres, updateBook } from 'components/http/bookApi';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdateBook = observer(({show, onHide, id}) => {
    const {books} = useContext(Context)
    const [title, setTitle] = useState("")
    const [descr, setDescr] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")
    const [img, setImg] = useState('')
    const [author, setAuthor] = useState(null)
    const [genre, SetGenre] = useState(null)

    useEffect(() => {
        fetchAuthors().then(data => books.setAuthors(data))
        fetchGenres().then(data => books.setGenres(data))
        fetchBooks().then(data => books.setBooks(data))
    }, [])

    const navigate = useNavigate()

    const update = () => {
        
        const book = {
            id: id,
            title: title,
            description: descr,
            price: price,
            publishedOn: date,
            imageUrl: img
        }

        updateBook(book, books.selectedAuthor.id, books.selectedGenre.id)
        .then(data => onHide())
        navigate(-1)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    
                    <Form.Control 
                        placeholder="Введите название книги"
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Form.Control 
                        placeholder="Введите описание книги"
                        as='textarea'
                        rows={5}
                        className="mt-3"
                        value={descr}
                        onChange={e => setDescr(e.target.value)}
                    />
                    <Form.Control 
                        placeholder="Введите стоимость книги"
                        type='number'
                        className="mt-3"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control 
                        placeholder="Вставьте ссылку на изображение для книги"
                        className="mt-3"
                        type='text'
                        value = {img}
                        onChange={e => setImg(e.target.value)}
                    /> 
                    <Form.Label className="mt-4">Введите дату выпуска книги</Form.Label>
                    <Form.Control 
                        placeholder="Введите дату выпуска книги"
                        type='date'
                        className=" "
                        value = {date}
                        onChange = {e => setDate(e.target.value)}
                    />
                      
                    <Dropdown className="mt-4 mb-3">
                        <Dropdown.Toggle>{books.selectedAuthor.name || "Выберите автора"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {books.authors.map(author =>
                                <Dropdown.Item onClick={() => books.setSelectedAuthor(author)} key={author.id}>{author.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3 mb-3">
                        <Dropdown.Toggle>{books.selectedGenre.name || "Выберите жанр"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {books.genres.map(genre =>
                                <Dropdown.Item onClick={() => books.setSelectedGenre(genre)} key={genre.id}>{genre.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>                   
                </Form>                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={update}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
    </Modal>
    );
});

export default UpdateBook;