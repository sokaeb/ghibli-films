import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './store/actions';

import './App.css';



function App(props) {
  const { fetchMovies, loadingMovies, errorMessage } = props;

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function mapStateToProps(state){
  return {
    loadingMovies: state.loadingMovies,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchMovies })(App);
