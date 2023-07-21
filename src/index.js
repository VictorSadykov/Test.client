import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from 'store/UserStore';
import BookStore from 'store/BookStore';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value ={{
    user: new UserStore(),
    books: new BookStore()
  }}>

    < App/>
  </Context.Provider>
);

