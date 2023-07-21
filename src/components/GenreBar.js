import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';

const GenreBar = observer(() => {
    const {books} = useContext(Context)
    return (
        <ListGroup>
            {books.genres.map(genre => 
                <ListGroup.Item
                 style={{cursor:'pointer'}}
                 active = {genre.id === books.selectedGenre.id}
                 key={genre.id}
                 onClick = {() => books.setSelectedGenre(genre)}
                >
                    {genre.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenreBar;