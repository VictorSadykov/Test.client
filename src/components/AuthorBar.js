import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';

const AuthorBar = observer(() => {
    const {books} = useContext(Context)

    return (
        <Row className="d-flex flex-row">
            {books.authors.map(author => 
                <Card
                    key={author.id}
                    className="p-2 me-1"
                    style={{cursor:'pointer', width:'auto'}}
                    border = {author.id === books.selectedAuthor.id ? "primary" : "gray"}
                    onClick = {() => books.setSelectedAuthor(author)}
                >
                    {author.name}
                </Card>    
            )}
        </Row>
    );
});

export default AuthorBar;