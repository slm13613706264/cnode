import React from 'react';
import './App.css';
import About from './views/about';
import Book from './views/book';
import Home from './views/home';
import Footer from './components/footer';
import Header from './components/header';
// import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/book" component={Book} />
          </Switch>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
