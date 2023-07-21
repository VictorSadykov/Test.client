import { deleteBook, fetchBook } from 'components/http/bookApi';
import UpdateBook from 'components/modals/UpdateBook';
import { Context } from 'index';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const BookPage = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate( )
    const [bookVisible, setBookVisible] = useState(false)
    const [book, setBook] = useState({
        id: 0,
        title: '',
        description: '',
        imageUrl: '',
        publishedOn: Date.now(),
        price: 0,
        author: {
            id: 0,
            name: ''
        },
        genre: {
            id: 0,
            name: ''
        }
    })
    const {id} = useParams()

    const date = new Date(book.publishedOn)
    let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
    let month = date.getMonth() >= 10 ? date.getMonth() : "0" + (date.getMonth() + 1)


    async function deleteClick() {
        await deleteBook(book.id)
        navigate(-1)
        
    }

    useEffect(() => {
        fetchBook(id).then(data => setBook(data))
    }, [])

    return (
        <Container className="mt-5">
            <Row>
            <Col md={4}>
                <Image width={350} height={475} src={book.imageUrl}/>
                </Col>
            <Col md={8}>
                <Row>
                    <h2>{book.title}</h2>
                    <h3 style={{color:'gray'}}>{book.genre.name}</h3>
                    <hr style={{width:'80%', position:'relative', left:10}}/>
                    <div>
                        <div style={{width: '80%'}}>
                            {book.description}
                        </div>
                        <div className="mt-4">
                            Автор: {book.author.name}
                        </div>
                        <div className='mt-2'>
                            Выпущена: {day}.{month}.{date.getFullYear()}
                        </div>
                        <div style={{fontSize:30}} className="mt-5">
                            Цена: <b>{book.price}</b> ₽
                        </div>                        
                            {user.isAuth
                            ?
                                <div className="mt-2">
                                    <Button style={{width:100}} variant="success" className="me-2 pt-2 pb-2">Купить</Button>
                                    <Button className="me-2 pt-2 pb-2" onClick={() => setBookVisible(true)}>Редактировать</Button>
                                    <Button variant="danger" className="me-2 pt-2 pb-2" onClick={() => deleteClick()}>Удалить</Button>
                                </div>
                            : 
                                <div className="mt-2">
                                    <Button style={{width:100}} variant="success" className="me-2 pt-2 pb-2">Купить</Button>
                                </div>
                            }
                        </div>
                </Row>
            </Col>
            </Row>
            <UpdateBook show={bookVisible} onHide={() => setBookVisible(false)} id={Number(id)}/>
        </Container>
    );
};

export default BookPage;