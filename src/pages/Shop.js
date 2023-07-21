import AuthorBar from 'components/AuthorBar';
import BookList from 'components/BookList';
import GenreBar from 'components/GenreBar';
import { fetchAuthors, fetchBooks, fetchGenres } from 'components/http/bookApi';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Shop = observer(() => {
    const {books} = useContext(Context)

    useEffect(() => {
        fetchAuthors().then(data => books.setAuthors(data))
        fetchGenres().then(data => books.setGenres(data))
        fetchBooks().then(data => books.setBooks(data))
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <GenreBar/>
                </Col>
                <Col md={9}>
                    <AuthorBar/>
                    <BookList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;