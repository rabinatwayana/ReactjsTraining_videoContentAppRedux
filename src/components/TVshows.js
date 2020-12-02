import React, { Component } from 'react'
import { getNowPlayingTVList, getUpcomingTVList, getPopularTVList, getTopRatedTVList } from "../actions/TVindex"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "../style/index.css"
import axios from "axios"
import { API_Key } from "../components/Constants"

class TVshows extends Component {
    state = {
        totalTVCard: 12,
        totalUpComingTVCard: 12,
        searchTVName: "",
        showSearchResult: false,
        searchName: "",
        searchMovie: false,
        searchResult: []
    }
    componentDidMount() {
        this.props.getNowPlayingTVList();
        this.props.getUpcomingTVList();
        this.props.getPopularTVList();
        this.props.getTopRatedTVList();

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state.searchTVName, "searchnameeeeee")
        await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/search/tv?api_key=${API_Key}&language=en-US&page=1&query=${this.state.searchTVName}&include_adult=false`
        }).then((res) => {
            this.setState({
                searchResult: res.data.results.filter(data => data.poster_path !== null),
                showSearchResult: true
            })
        })
            .catch((res) => console.log(res))
    }
    handleSearchClick = () => {
        alert("sercg")
    }

    handleLoadMore = () => {
        this.setState({
            totalTVCard: this.state.totalTVCard + 12,
        })
    }
    handleLoadMoreUpComing = () => {
        this.setState({
            totalUpComingTVCard: this.state.totalUpComingTVCard + 12,
        })
    }
    render() {
        const imgURL = "https://image.tmdb.org/t/p/w200/";

        let nowPlayingTV = [...this.props.nowPlayingTVList]
        console.log(this.props.nowPlayingTVList, "this.props.nowPlayingTVList")
        let nowPlayingTVCard = nowPlayingTV.slice(0, this.state.totalTVCard)
        let upComingTV = [...this.props.popularTVList]
        let upComingTVCard = upComingTV.slice(0, this.state.totalUpComingTVCard)
        return (
            <>
                {this.state.showSearchResult ?
                    <div className="container">
                        <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch TV Shows Online</h3>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                <li class="breadcrumb-item"><Link to="/tvshows"><span style={{ color: "black", fontWeight: "bold" }}>TVshows</span></Link></li>
                                <nav style={{ padding: "1px" }} class="navbar navbar-expand-lg navbar-dark pink lighten-3">
                                    <div style={{ marginLeft: "700px" }} class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div class="input-group md-form form-sm form-2 pl-0">
                                            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" onChange={this.onChange} name="searchTVName" value={this.state.searchTVName} aria-label="Search" />
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
                            {this.state.searchResult.map((tv) => (
                                <div className="col-md-2">
                                    <div className="card">
                                        {/* <div className="card-body">
                                            <Link to={`/tvshows/${tv.id}`}><h6 className="card-text">{tv.name}</h6></Link>
                                        </div> */}
                                        <div className="postionstyle">
                                            <img className="img-fluid cardimg" src={`${imgURL}${tv.poster_path}`} alt="not found" />
                                            <div className="ratingposition">
                                                <Link to={`/tvshows/${tv.id}`} className='btn btn-sm btn-info btnstyle'>Veiw more</Link>
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
                                <li class="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                <li class="breadcrumb-item"><span style={{ color: "black", fontWeight: "bold" }}>TVshows</span></li>


                                <nav style={{ padding: "1px" }} class="navbar navbar-expand-lg navbar-dark pink lighten-3">

                                    <div style={{ marginLeft: "700px" }} class="collapse navbar-collapse" id="navbarSupportedContent">


                                        <div class="input-group md-form form-sm form-2 pl-0">
                                            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" onChange={this.onChange} name="searchTVName" value={this.state.searchTVName} aria-label="Search" />
                                            <div class="input-group-append">
                                                <span class="input-group-text red lighten-3" id="basic-text1"><i type="submit" onClick={this.handleSubmit} class="fas fa-search text-grey"
                                                    aria-hidden="true"></i></span>
                                            </div>
                                        </div>


                                    </div>


                                </nav>

                            </ol>



                        </nav>
                        <h4 style={{ marginTop: "10px", background: "#313131", color: "white", padding: "10px", paddingLeft: "385px" }}>WATCH TV SHOWS ONLINE</h4>


                        {/* <div style={{ display: "inline-block" }} className="top-search">

                            <form onSubmit={this.handleSubmit}>
                                <input className="search" onChange={this.onChange} name="searchTVName" value={this.state.searchName} type="text" placeholder="search movies" />
                                <button className="search-button" type="submit"><i class="fas fa-search"></i>Search</button>
                            </form>
                        </div> */}

                        {/* {this.state.searchMovie && <Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link>} */}

                        <div style={{ marginRight: "5px" }} className="row">
                            {nowPlayingTVCard.map((movie) => (
                                <div className="col-md-2">
                                    <div className="card">
                                        {/* <div className="card-body">
                                            <Link to={`/tvshows/${movie.id}`}><h6 className="card-text">{movie.name}</h6></Link>
                                        </div> */}
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

                        {this.props.nowPlayingTVList.length !== nowPlayingTVCard.length &&
                            <button className="btn btn-info" onClick={this.handleLoadMore}>Load More</button>
                        }

                        <h3 style={{ color: "whitesmoke" }}>POPULAR TV-SHOWS</h3>

                        <div style={{ marginRight: "5px" }} className="row">
                            {upComingTVCard.map((movie) => (
                                <div className="col-md-2">
                                    <div className="card" >

                                        <img className="img-fluid cardimg" src={`${imgURL}${movie.poster_path}`} alt="not found" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {this.props.popularTVList.length !== upComingTVCard.length &&
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
        nowPlayingTVList: state.getNowPlayingTVList,
        upComingTVList: state.getUpcomingTVList,
        popularTVList: state.getPopularTVList,
        topRatedTVList: state.getTopRatedTVList,

    }
}
export default connect(mapStateToProps, { getNowPlayingTVList, getUpcomingTVList, getPopularTVList, getTopRatedTVList })(TVshows);
