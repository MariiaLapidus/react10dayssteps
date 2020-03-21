import React from "react";

class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            willWatch: false
        };
    };

    changeWillWatch = () => {
        const {removeMovieToWillWatch, addMovieToWillWatch, movie } = this.props;
        this.state.willWatch ? removeMovieToWillWatch(movie) : addMovieToWillWatch(movie);
        this.setState(prevState=> ({
            willWatch: !prevState.willWatch

        }));


    };

    render () {

            const {movie, removeMovie} = this.props;
            const {willWatch} = this.state;
            return (
                <div className="card">
                    <img className="card-img-top"
                         src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                         movie.poster_path}`}
                         alt=""
                    />
                    <div className="card-body">
                        <h6 className="card-title">{movie.title}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Rating: {movie.vote_average}</p>
                            <button
                                type="button"
                                className={`btn ${willWatch ? "btn-success"  : "btn-secondary"}`}
                                onClick={this.changeWillWatch}
                            >
                                {this.state.willWatch ? "Remove will watch" : "Add will watch"}
                            </button>

                            {/*{this.state.willWatch ? (*/}
                            {/*    <button type="button" className="btn btn-success"*/}
                            {/*            onClick= {() =>{*/}
                            {/*                this.setState({*/}
                            {/*                    willWatch: false*/}
                            {/*                });*/}
                            {/*                removeMovieToWillWatch(movie)}}>*/}
                            {/*       Remove Will Watch*/}
                            {/*    </button>*/}
                            {/*) : (*/}
                            {/*    <button type="button" className="btn btn-secondary"*/}
                            {/*            onClick= {() =>{*/}
                            {/*                this.setState({*/}
                            {/*                    willWatch: true*/}
                            {/*                });*/}
                            {/*                addMovieToWillWatch(movie)}}>*/}
                            {/*        Add Will Watch*/}
                            {/*    </button>*/}
                            {/*)}*/}

                        </div>
                        <button onClick={removeMovie.bind(null, movie)}>
                            Delete movie
                        </button>
                    </div>
                </div>

            );
        }
}
// const MovieItem  = (props) => {
//     // console.log(props);
//     const {movie, removeMovie, addMovieToWillWatch} = props;
//     return (
//         <div className="card" >
//             <img className="card-img-top"
//                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
//                  movie.poster_path}`}
//                  alt=""
//             />
//             <div className="card-body" >
//                 <h6 className="card-title">{movie.title}</h6>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0">Rating: {movie.vote_average}</p>
//                     <button type="button" className="btn btn-secondary" onClick={addMovieToWillWatch.bind(null, movie)}>
//                         Will Watch
//                     </button>
//                 </div>
//             <button onClick={removeMovie.bind(null, movie)}>
//                 Delete movie
//             </button>
//             </div>
//         </div>
//
//     );
// };
export default MovieItem

