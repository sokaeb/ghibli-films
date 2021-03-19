import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './store/actions';
import MovieList from './components/MovieList';

import './App.css';

function App(props) {
  const { fetchMovies, loadingMovies, errorMessage } = props;

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <div className="App">
      <header className="App-header">
        <img src="ghibli.png" alt="" className="ghibliImg"></img>
      </header>
      <div>
        {!loadingMovies ? (<MovieList />) : ( <div className="loading">loading movies...</div>
        )}
      </div>
        {errorMessage !== "" ? <div>{errorMessage}</div> : null }
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
