import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { API_Key } from "./Constants"
import { connect } from 'react-redux'
import { displayMovieList, getUpcomingMovieList, getPopularMovie, getTopRatedMovie } from "../actions"
import { getNowPlayingTVList, getUpcomingTVList, getPopularTVList, getTopRatedTVList } from "../actions/TVindex"


import axios from "axios"

class Home extends Component {
    state = {
        initial_banner: '',
        searchName: "",
        searchMovie: false,
        searchResult: []
    }

    // componentDidMount() {
    //     console.log("ooooooooooooooo")
    //     this.props.getNowPlayingTVList();
    //     this.props.getUpcomingTVList();
    //     this.props.getPopularTVList();
    //     this.props.getTopRatedTVList();
    //     this.props.getPopularMovie()
    //     this.props.getTopRatedMovie()
    //     this.props.getUpcomingMovieList();
    // }
    handleHomeClick = (e) => {
        this.setState({
            searchMovie: false,

        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&language=en-US&page=1&query=${this.state.searchName}&include_adult=false`
        }).then((res) => {
            this.setState({
                searchResult: res.data.results.filter(data => data.poster_path !== null),
                searchMovie: true
            })
        })
            .catch((res) => console.log(res))
    }
    NowPlayingMovieList = async (e) => {
        await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                console.log(response.data.results.slice(10, 11)[0].poster_path, "sloce")
                this.setState({
                    initial_banner: response.data.results.slice(10, 11)[0],
                })
            }
            )
            .catch((error) => console.log(error))
    }



    componentDidMount() {
        this.NowPlayingMovieList();
        this.props.getNowPlayingTVList();
        this.props.displayMovieList();


    }

    render() {
        const imgURL = "https://image.tmdb.org/t/p/w200/";

        return (
            <>
                {this.state.searchMovie ?
                    <div className="container">
                        {/* <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies Online</h3> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li key="Homelink" className="breadcrumb-item"><Link onClick={this.handleHomeClick} to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                {/* <li key="Movielink" className="breadcrumb-item"><Link to="/movies"><span style={{ color: "black", fontWeight: "bold" }}>Movies</span></Link></li> */}

                                <nav style={{ padding: "1px" }} class="navbar navbar-expand-lg navbar-dark pink lighten-3">
                                    <div style={{ marginLeft: "700px" }} class="collapse navbar-collapse" id="navbarSupportedContent">

                                        <div class="input-group md-form form-sm form-2 pl-0">
                                            <input class="form-control my-0 py-1 red-border" type="text" onChange={this.onChange} name="searchName" value={this.state.searchName} placeholder="Search" aria-label="Search" />
                                            <div class="input-group-append">
                                                <span class="input-group-text red lighten-3" id="basic-text1"><i type="submit" onClick={this.handleSubmit} class="fas fa-search text-grey"
                                                    aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </ol>
                        </nav>

                        <h5 style={{ paddingTop: "10px", color: "black" }}>Search Results...</h5>
                        <div className="row">
                            {this.state.searchResult.map((movie) => (
                                <div className="col-md-2">
                                    <div className="card">
                                        {/* <div className="card-body"> */}
                                        {/* <Link to={`/movies/${movie.id}`}><h6 className="card-text">{movie.name}</h6></Link>
                                    </div> */}
                                        <div className="postionstyle">
                                            <img className="img-fluid cardimg" src={`${imgURL}${movie.poster_path}`} alt="not found" />

                                            <div className="ratingposition">
                                                {/* <p className='starsign'><i class="fas fa-star"></i></p> */}
                                                {/* <p className='ratingsign'>{this.props.moviedisplay.vote_average}/10</p> */}
                                                <Link to={`/movies/${movie.id}`} className='btn btn-sm btn-info btnstyle'>Veiw more</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div> :

                    <div className="container" >
                        {/* <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies and TV-Shows Online</h3> */}

                        <nav style={{ marginRight: "120px", marginLeft: "120px", marginBottom: "5px", height: "50px", backgroundColor: "#313131" }} class="navbar navbar-expand-lg fixed-top ">
                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/"><span style={{ marginLeft: "-15px", fontWeight: "bolder", fontSize: "25px", color: "#40d7bc" }}>WATCHFREE</span></Link>
                                    </li>
                                    <li style={{ paddingTop: "6px" }} class="nav-item">
                                        <Link className="nav-link" to="/"><span style={{ fontWeight: "bolder", color: "white" }}>Home</span></Link>
                                    </li>
                                    <li style={{ paddingTop: "6px" }} class="nav-item">

                                        <Link className="nav-link" to="/movies"><span style={{ fontWeight: "bolder", color: "white" }}>Movies</span></Link>
                                    </li>

                                    <li style={{ paddingTop: "6px" }} class="nav-item">
                                        <Link className="nav-link" to="/tvshows"><span style={{ fontWeight: "bolder", color: "white", paddingTop: "50px" }}>TV Shows</span></Link>

                                    </li>
                                </ul>

                                <nav class="navbar navbar-expand-lg navbar-dark pink lighten-3 mb-4">

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                        <div style={{ marginTop: "20px" }} class="input-group md-form form-sm form-2 pl-0">
                                            {/* <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey"
                                                aria-hidden="true"></i></span>
                                        </div> */}
                                            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" onChange={this.onChange} name="searchName" value={this.state.searchName} aria-label="Search" />
                                            <div class="input-group-append">
                                                <span class="input-group-text red lighten-3" id="basic-text1"><i type="submit" onClick={this.handleSubmit} class="fas fa-search text-grey"
                                                    aria-hidden="true"></i></span>
                                            </div>
                                        </div>



                                    </div>


                                </nav>


                            </div>
                        </nav>

                        <div style={{ backgroundColor: "#313131" }} id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">

                                    <img style={{ marginBottom: "10px", marginTop: "60px", marginLeft: "21vw", height: "75vh" }} className="d-block w-50" src={`${imgURL}${this.state.initial_banner.poster_path}`} alt="not found" />

                                </div>

                                {this.props.now_playing_MovieList.slice(12, 18).map((banner) =>
                                    <div class="carousel-item ">

                                        <img style={{ marginBottom: "10px", marginTop: "60px", marginLeft: "21vw", height: "75vh" }} className="d-block w-50" src={`${imgURL}${banner.poster_path}`} alt="not found" />
                                    </div>

                                )}
                                {this.props.now_playing_TVList.slice(12, 18).map((banner) =>
                                    <div class="carousel-item ">

                                        <img style={{ marginBottom: "10px", marginTop: "60px", marginLeft: "21vw", height: "75vh" }} className="d-block w-50" src={`${imgURL}${banner.poster_path}`} alt="not found" />
                                    </div>

                                )}



                                {/* <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide" />
                        </div> */}
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <h3 style={{ marginTop: "10px", background: "#313131", color: "white", padding: "10px", paddingLeft: "325px" }}>Watch Movies and TV-Shows Online</h3>
                        <div style={{ marginLeft: "1px", marginRight: "1px", backgroundColor: "#313131", paddingRight: "25px" }} className="row">
                            {this.props.now_playing_MovieList.slice(6, 12).map((movie) => (
                                <div className="col-md-2">
                                    <div className="card">


                                        <div className="postionstyle">
                                            <img className="img-fluid cardimg" src={`${imgURL}${movie.poster_path}`} alt="not found" />

                                            <div className="ratingposition">

                                                <Link to={`/movies/${movie.id}`} className='btn btn-sm btn-info btnstyle'>Veiw more</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginLeft: "1px", marginRight: "1px", backgroundColor: "#313131", paddingBottom: "18px", paddingRight: "25px" }} className="row">
                            {this.props.now_playing_TVList.slice(6, 12).map((movie) => (
                                <div className="col-md-2">
                                    <div className="card">

                                        <div className="postionstyle">
                                            <img className="img-fluid cardimg" src={`${imgURL}${movie.poster_path}`} alt="not found" />

                                            <div className="ratingposition">
                                                {/* <p className='starsign'><i class="fas fa-star"></i></p> */}
                                                {/* <p className='ratingsign'>{this.props.moviedisplay.vote_average}/10</p> */}
                                                <Link to={`/tvshows/${movie.id}`} className='btn btn-sm btn-info btnstyle'>Veiw more</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    console.log(state, "moviesStateHome")
    return {
        now_playing_MovieList: state.movieList,
        // upComingMovieList: state.upComingMovieList,
        now_playing_TVList: state.getNowPlayingTVList,
        // upComingTVList: state.getUpcomingTVList,
        // popularTVList: state.getPopularTVList,
        // topRatedTVList: state.getTopRatedTVList,
    }
}
export default connect(mapStateToProps, { displayMovieList, getUpcomingMovieList, getPopularMovie, getTopRatedMovie, getNowPlayingTVList, getUpcomingTVList, getPopularTVList, getTopRatedTVList })(Home);
