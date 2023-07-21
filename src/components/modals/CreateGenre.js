import { createGenre } from 'components/http/bookApi';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateGenre = ({show, onHide}) => {

    const [genre, setGenre] = useState("")


    const addGenre = ()  => {       
        createGenre({name: genre}).then(data => setGenre(''))
        onHide()        
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
                    Добавить жанр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                    placeholder="Введите название жанра"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}/>

                </Form>                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addGenre}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
    </Modal>
    );
};

export default CreateGenre;