import React from 'react';

const NotWorkingPage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height:window.innerHeight - 54, fontSize:50}}>
            <div>Сайт не работает.</div>
            <div>Зайдите в рабочее время.</div>
        </div>
    );
};

export default NotWorkingPage;