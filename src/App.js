import React from 'react';
import './App.css';
import Row from "./Row"
import request from "./request"
import Baner from './Baner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Baner/>
      <Row title= "Netfix Original" fetchUrl={request.fetchNetflixOriginals} isLargeRow></Row>
      <Row title= "Trending" fetchUrl={request.fetchTrending}></Row>
      <Row title= "Top Rated" fetchUrl={request.fetchTopRated}></Row>
      <Row title= "Action" fetchUrl={request.fetchActionMovies}></Row>
      <Row title= "Adventure" fetchUrl={request.fetchAdventureMovies}></Row>
      <Row title= "Animation" fetchUrl={request.fetchAnimationMovies}></Row>
      <Row title= "Comedy" fetchUrl={request.fetchComedyMovies}></Row>
      <Row title= "Crime" fetchUrl={request.fetchCrimeMovies}></Row>
      <Row title= "Drama" fetchUrl={request.fetchDrama}></Row>
      <Row title= "Documentary" fetchUrl={request.fetchDocumentary}></Row>
      <Row title= "Family" fetchUrl={request.fetchFamilyMovies}></Row>
      <Row title= "Fantasy" fetchUrl={request.fetchFantasyMovies}></Row>
      <Row title= "History" fetchUrl={request.fetchHistoryMovies}></Row>
      <Row title= "Horror" fetchUrl={request.fetchHorrorMovies}></Row>
      <Row title= "Music" fetchUrl={request.fetchMusicMovies}></Row>
      <Row title= "Mystery" fetchUrl={request.fetchMysteryMovies}></Row>
      <Row title= "Romance" fetchUrl={request.fetchRomanceMovies}></Row>
      <Row title= "Science Fiction" fetchUrl={request.fetchScienceFictionMovies}></Row>
      <Row title= "Thriller" fetchUrl={request.fetchThrillerMovies}></Row>
      <Row title= "War" fetchUrl={request.fetchWarMovies}></Row>
      <Row title= "Western" fetchUrl={request.fetchWesternMovies}></Row>


      
    
    </div>
  );
}

export default App;
