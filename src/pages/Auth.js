import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from 'utils/consts';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from 'components/http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click  = async () => {
        let data
        if (isLogin) {
            data = await login(email,password)
        } else {
            data = await registration(email, password)
        }
        console.log(data);
        user.setUser(data)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}} >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                     <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />   
                </Form>
                {isLogin ? 
                <div style={{fontSize:13, color:'gray'}} className="mt-3 mb-3">
                    <div className="mt-1 mb-1">Email: string@mail.com</div>
                    <div className="mt-1 mb-1">Пароль: Passw0rd!</div>
                    
                </div>
                :
                <div style={{fontSize:13, color:'gray'}} className="mt-3 mb-3">
                    <div className="mt-1 mb-1">Пароль должен содержать хотя бы одну букву маленького и большого регистра.</div>
                    <div className="mt-1 mb-1">Пароль должен содержать хотя бы одну цифру.</div>
                    <div className="mt-1 mb-1">Пароль должен содержать хотя бы один символ (?!%$#@) и т.д.</div>
                </div>

                }
                <Row className="mt-3">
                    <Button                         
                        variant={"outline-success"}
                        className="mb-3"
                        style={{margin:'0 auto', width:'95%'}}
                        onClick={() => click()}
                        >
                        {isLogin? "Войти" : "Регистрация"}
                    </Button>
                    {isLogin ?
                        <div style={{textAlign:'center'}}>
                            <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </div>
                        :
                        <div style={{textAlign:'center'}}>
                            <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                    }
                </Row>                
            </Card>
        </Container>
    );
});

export default Auth;