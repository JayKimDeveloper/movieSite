import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "http://pds21.egloos.com/pds/201803/20/82/c0239682_5ab101651755b.jpg",
  "http://4.bp.blogspot.com/-a484caD2oLA/VZKEpZlVhAI/AAAAAAAAGSc/rjzdiYGE00Q/s1600/full_metal_jacket_ver2_xlg.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
]

class App extends Component {

  state = {
    }

    componentDidMount(){
        setTimeout(() => {
          this.setState({
            movies: [
               {
                  title : "Metarix",
                  poster : "http://pds21.egloos.com/pds/201803/20/82/c0239682_5ab101651755b.jpg"
                },
                {
                  title : "Full Metal Jacket",
                  poster : "http://4.bp.blogspot.com/-a484caD2oLA/VZKEpZlVhAI/AAAAAAAAGSc/rjzdiYGE00Q/s1600/full_metal_jacket_ver2_xlg.jpg"
                },
                {
                  title : "Oldboy",
                  poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg"
                },
                {
                  title : "Star Wars",
                  poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
                },
                {
                  title: "TrainsPorting",
                  poster: "https://ia.media-imdb.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
                }
            ]
          })
          console.log("Hello");
        }, 5000)
    }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading" }
      </div>
    );
  }
}

export default App;
