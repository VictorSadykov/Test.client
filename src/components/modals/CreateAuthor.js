import { createAuthor } from 'components/http/bookApi';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateAuthor = ({show, onHide}) => {
    const[author, setAuthor] = useState("")
    const addAuthor = ()  => {       
        createAuthor({name: author}).then(data => setAuthor(''))
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
                    Добавить автора
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={author}
                        type="text"
                        onChange={e=> setAuthor(e.target.value)}
                        placeholder="Введите полное имя автора"/>
                        
                </Form>                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addAuthor}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
    </Modal>
    );
};

export default CreateAuthor;