import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm.js';

import {Provider} from 'react-redux';

import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm />
        <hr />
        <Posts/>
      </div>
    </Provider>
    
  );
}

export default App;
