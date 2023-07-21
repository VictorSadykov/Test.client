import AppRouter from './components/AppRouter';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';




const App = observer(() => {

    const [currentTime, setCurrentTime] = useState(new Date());
const [isWorking, setIsWorking] = useState(false)

useEffect(() => {
    console.log(currentTime.getHours())
    if (currentTime.getHours() < 8 || currentTime.getHours() >= 20) {
        setIsWorking(false)
    } else {
        setIsWorking(true)
    }


}, [])

    

    return (   
             
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
    
    });

export default App;