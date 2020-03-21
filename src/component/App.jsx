import React, {Component} from 'react';
import {moviesData} from '../moviesData';
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../Api/Api";
import MovieTabs from "./MovieTabs"
// import 'bootstrap/dist/css/bootstrap.min.css';// 154K  (gzipped)
//------------функциональная компонента
// function removeMovie(movie) {
//     const updateMovies = this.state.movies.filter(function (item) {
//         return item.id !== movie.id;
//     });
//     console.log(updateMovies);
//     this.setState({
//         movies: updateMovies
//     });
// }
//UI = fn(state, props)


    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                movies: [], //moviesData,заполняется фильмами с  АРI
                moviesWillWatch: [],
                sort_by: "popularity.desc"
            };
        }
///////--------------------- получение фильмов с АРI
        componentDidMount() {
           this.getMovies();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.getMovies();
        }

        getMovies = () => {
            fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
                this.state.sort_by}`
            ).then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({
                    movies: data.results
                });
            });
        };


        removeMovie = (movie) => { // метод классовой компоненты
            const updateMovies = this.state.movies.filter(function (item) {
                return item.id !== movie.id;
            });
            console.log(updateMovies);
            this.setState({
                movies: updateMovies
            });
        }
        addMovieToWillWatch = (movie) => {
            console.log(movie)

            const updateWillWatch = [...this.state.moviesWillWatch, movie];
            // updateWillWatch.push(movie);
            this.setState({
                moviesWillWatch:updateWillWatch
            })
        }

        removeMovieToWillWatch = (movie) => {
            const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
                return item.id !== movie.id;
            });
            this.setState({
                moviesWillWatch: updateMoviesWillWatch
            });
        }

        updateSortBy = (value) => {
            this.setState({
                sort_by: value
            })
        }



        render() {
            console.log("render", this.state.sort_by);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="row mb-4">
                                <div className="col-12">
                                    <MovieTabs sort_by = {this.state.sort_by}
                                               updateSortBy={this.updateSortBy}
                                    />
                                </div>
                            {this.state.movies.map(movie => {
                                return (
                                <div className="col-6 mb-4"  key={movie.id}>
                                <MovieItem
                                    movie={movie}
                                    removeMovie={this.removeMovie}
                                    addMovieToWillWatch={this.addMovieToWillWatch}
                                    removeMovieToWillWatch={this.removeMovieToWillWatch}

                                />
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Will watch:{this.state.moviesWillWatch.length}</p>
                                <ul className="list-group">
                                    {this.state.moviesWillWatch.map(movie => (
                                        <li key={movie.id} className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p>{movie.title}</p>
                                                <p>{movie.vote_average}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default App;