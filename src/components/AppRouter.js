import { authRoutes, publicRoutes } from 'Routes';
import { Context } from 'index';
import NotWorkingPage from 'pages/NotWorkingPage';
import Shop from 'pages/Shop';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    const {user} = useContext(Context)
    const [time, setTime] = useState(new Date())
    const [isWorking, setIsWorking] = useState(false)

    useEffect(() => {
        const hours = time.getHours()
        if (hours < 8 || hours >= 20) {
            setIsWorking(false)
        } else {
            setIsWorking(true)
        }
    })
    return (
        
        <Routes>
        {isWorking ? (
        <>
        {user.isAuth && authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
        ))}
        {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
        ))}
          <Route path="*" element={<Shop />} />
            </>
            ) : (
            <Route path="*" element={<NotWorkingPage />} />
            )}
    </Routes>
        
    );
};

export default AppRouter;