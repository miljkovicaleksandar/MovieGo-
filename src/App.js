import React from 'react';
import Header from './App/components/Header';
import Footer from './App/components/Footer';
import ListOfShows from './App/components/main/ListOfShows';
import { Switch, Route } from 'react-router-dom';
import SingleShow from './App/components/main/SingleShow';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/show-details/:id" component={SingleShow}/>
        <Route exact path="/" component={ListOfShows}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
