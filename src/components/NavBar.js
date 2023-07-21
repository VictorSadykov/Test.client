import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import UserStore from 'store/UserStore';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from 'utils/consts';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    function exit() {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
    }

    function admin() {
        user.setIsAuth(true)
        navigate(ADMIN_ROUTE)
    }

    return (
        <Navbar className="navbar-dark" bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color:'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Книжный магазин</NavLink>
                {
                    user.isAuth ? 
                    <Nav style={{color:'white'}}  className="ml-auto">
                        <Button 
                            variant={'outline-light'}
                            onClick={() => admin()}
                            >
                            Панель админа
                        </Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => exit()}
                            className="ms-2"
                            >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav style={{color:'white'}}  className="ml-auto d-flex justify-content-center align-items-center">
                        <div className="me-3">Чтобы изменять данные нужно авторизоваться</div>
                        <Button variant={'outline-light'} onClick ={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
        </Container>
      </Navbar>
    );
});

export default NavBar;