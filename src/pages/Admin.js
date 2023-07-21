import CreateAuthor from 'components/modals/CreateAuthor';
import CreateBook from 'components/modals/CreateBook';
import CreateGenre from 'components/modals/CreateGenre';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false)
    const [authorVisible, setAuthorVisible] = useState(false)
    const [bookVisible, setBookVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
           <Button
            variant={'outline-dark'}
            className='mt-4 p-2'
            onClick = {() => setGenreVisible(true)}
           >Добавить жанр</Button>
           <Button
            variant={'outline-dark'}
            className='mt-4 p-2'
            onClick = {() => setAuthorVisible(true)}
           >Добавить автора</Button>
           <Button
            variant={'outline-dark'}
            className='mt-4 p-2'
            onClick = {() => setBookVisible(true)}
           >Добавить книгу</Button>           
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
            <CreateAuthor show={authorVisible} onHide={() => setAuthorVisible(false)}/>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
        </Container>
    );
};

export default Admin;