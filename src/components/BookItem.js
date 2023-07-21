import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom'
import { BOOK_ROUTE } from 'utils/consts';

const BookItem = ({book}) => {
    const navigate = useNavigate()
    return (
        <Col md={3}>
            <Card
                style={{width:200, cursor:'pointer', border:"light"}}
                className="mt-3"
                onClick = {() => navigate(BOOK_ROUTE + '/' + book.id)}
            >
                <Image width={198} height={250} src={book.imageUrl}></Image>
                <div className="d-flex flex-column">
                    <div style={{fontWeight:'bold'}} className="mt-2 ps-2">{book.title}</div>
                    <div style={{color: 'gray'}} className="mt-2 ps-2">{book.author.name} / {book.genre.name}</div>
                    <div className="mt-2 ps-2 pb-3">{book.price}  ₽</div>
                </div>
                    
            </Card>
        </Col>
    );
};

export default BookItem;