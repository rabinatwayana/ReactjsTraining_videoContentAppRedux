import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayMovieList, getUpcomingMovieList, getPopularMovie, getTopRatedMovie } from "../actions"
import { Link, withRouter } from 'react-router-dom'
import "../style/index.css"
import axios from "axios"
import { API_Key } from "../components/Constants"

class Movies extends Component {
    state = {
        totalMovieCard: 12,
        totalUpComingMovieCard: 12,
        searchName: "",
        searchMovie: false,
        searchResult: []
    }
    componentDidMount() {
        this.props.getPopularMovie()
        this.props.getTopRatedMovie()
        this.props.displayMovieList();
        this.props.getUpcomingMovieList();
    }
    handleLoadMore = () => {
        this.setState({
            totalMovieCard: this.state.totalMovieCard + 12,
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        // this.props.history.push(`movies/search_movie/${this.state.searchName}`)

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
    handleLoadMoreUpComing = () => {
        this.setState({
            totalUpComingMovieCard: this.state.totalUpComingMovieCard + 12,
        })
    }
    // handleViewMore = (id) => {
    //     console.log("viewmore")
    //     this.props.setCurrentID(id)
    // }

    render() {
        const imgURL = "https://image.tmdb.org/t/p/w200/";
        let allMovieCard = [...this.props.now_playing_MovieList]
        let displayMovieCard = allMovieCard.slice(0, this.state.totalMovieCard)
        let upComingMovie = [...this.props.upComingMovieList]
        let upComingMovieCard = upComingMovie.slice(0, this.state.totalUpComingMovieCard)

        return (
            <>
                {this.state.searchMovie ?
                    <div className="container">
                        {/* <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies Online</h3> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li key="Homelink" className="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                <li key="Movielink" className="breadcrumb-item"><Link to="/movies"><span style={{ color: "black", fontWeight: "bold" }}>Movies</span></Link></li>

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
                    <div className="container">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li key="Homelink" className="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                <li key="Movielink" className="breadcrumb-item"><span style={{ color: "black", fontWeight: "bold" }}>Movies</span></li>

                                <nav style={{ padding: "1px" }} class="navbar navbar-expand-lg navbar-dark pink lighten-3">

                                    <div style={{ marginLeft: "700px" }} class="collapse navbar-collapse" id="navbarSupportedContent">

                                        <div class="input-group md-form form-sm form-2 pl-0">
                                            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" onChange={this.onChange} name="searchName" value={this.state.searchName} aria-label="Search" />
                                            <div class="input-group-append">
                                                <span class="input-group-text red lighten-3" id="basic-text1"><i type="submit" onClick={this.handleSubmit} class="fas fa-search text-grey"
                                                    aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </ol>
                        </nav>
                        <h4 style={{ marginTop: "10px", background: "#313131", color: "white", padding: "10px", paddingLeft: "385px" }}>WATCH MOVIES ONLINE</h4>
                        <div style={{ marginRight: "5px" }} className="row">
                            {displayMovieCard.map((movie) => (
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

                        {
                            this.props.now_playing_MovieList.length !== displayMovieCard.length &&
                            <button className="btn btn-info" onClick={this.handleLoadMore}>Load More</button>
                        }

                        <h3 style={{ color: "whitesmoke" }}>Upcoming Movies</h3>

                        <div style={{ marginRight: "5px" }} className="row">
                            {upComingMovieCard.map((movie) => (
                                <div className="col-md-2">
                                    <div className="card" >

                                        <img className="img-fluid cardimg" src={`${imgURL}${movie.poster_path}`} alt="not found" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {this.props.upComingMovieList.length !== upComingMovieCard.length &&
                            <button className="btn btn-info" onClick={this.handleLoadMoreUpComing}>Load More</button>
                        }

                    </div>
                }
            </>
        )
    }
}
function mapStateToProps(state) {
    console.log(state, "moviesState")
    return {
        now_playing_MovieList: state.movieList,
        upComingMovieList: state.upComingMovieList,

    }
}
export default connect(mapStateToProps, { displayMovieList, getUpcomingMovieList, getPopularMovie, getTopRatedMovie })(Movies);