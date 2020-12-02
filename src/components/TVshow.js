import React, { Component } from 'react'
import { getTVdetail, getTVvideo } from "../actions/TVindex"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "../style/index.css"
import axios from "axios"

import { API_Key } from "../components/Constants"


class TVshow extends Component {
    state = {
        searchName: "",
        showSearchResult: false,

    }
    componentDidMount() {
        console.log(this.props.match.params.tvshowid, "tvdidmount")
        this.props.getTVdetail(this.props.match.params.tvshowid)
        this.props.getTVvideo(this.props.match.params.tvshowid)
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
                showSearchResult: true
            })
        })
            .catch((res) => console.log(res))
    }

    render() {
        const imgURL = "https://image.tmdb.org/t/p/w500/";
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
                    <div className="container" >
                        {/* <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies Online</h3> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li key="Homelink1" className="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                <li key="TVlink" className="breadcrumb-item"><Link to="/tvshows"><span style={{ color: "black", fontWeight: "bold" }}>TV Shows</span></Link></li>
                                <li key="SHOWlink" className="breadcrumb-item"><span style={{ color: "black", fontWeight: "bold" }}>{this.props.tvIdDetail.name}</span></li>
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

                        <h4 style={{ marginTop: "10px", background: "#313131", color: "white", padding: "10px", paddingLeft: "385px" }}>WATCH TV SHOWS ONLINE</h4>

                        <div style={{ marginLeft: "0px" }} className="row">
                            <div style={{ width: "90", background: " #313131" }} className="col-md-8">

                                <iframe style={{ marginTop: "13px" }} width="100%" height="400" src={`https://www.youtube.com/embed/${this.props.tvVideo}`}>
                                </iframe>
                                <div style={{ marginTop: "13px" }} className="row">
                                    <div className="col-md-4">
                                        <div className="card-single" >
                                            <img className="img-fluid cardimg-single" src={`${imgURL}${this.props.tvIdDetail.poster_path}`} alt="not found" />
                                        </div>
                                    </div>
                                    <div style={{ height: "325px", width: "90", background: " #313131" }} className="col-md-8">
                                        <h6 style={{ color: "white" }}> Title : {this.props.tvIdDetail.name}</h6>
                                        <h6 style={{ color: "white" }}> No of Seasons : {this.props.tvIdDetail.number_of_seasons}</h6>
                                        <h6 style={{ color: "white" }}> No of Episode : {this.props.tvIdDetail.number_of_episodes}</h6>

                                        <p style={{ color: "white", marginTop: "20px" }}> {this.props.tvIdDetail.overview}</p>

                                    </div>


                                </div>

                                {/* {this.state.tvVideo.map((video)=>(
 <iframe width="50%" height="200" src={`https://www.youtube.com/embed/${video.key}`}>
                            </iframe>
))}  */}


                                {/* <iframe width="50%" height="200" src={`https://www.youtube.com/embed/${this.state.tvVideo}`}>
                            </iframe> */}
                            </div>

                            <div className="col-md-4">
                                <div >
                                    <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>POPULAR TV-SERIES</h5>

                                    <ul className=" side-column">
                                        {this.props.popularTVList.map((movie) =>
                                            <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/tvshows/${movie.id}`}><span style={{ color: "white" }}>{movie.name}</span></Link></li>
                                        )}
                                    </ul>
                                </div>


                                <div >
                                    <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>TOP RATED TV-SERIES</h5>

                                    <ul className="side-column" >
                                        {this.props.topRatedTVList.map((movie) =>
                                            <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/tvshows/${movie.id}`}><span style={{ color: "white" }}>{movie.name}</span></Link></li>
                                        )}
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                }
            </>

        )
    }
}
function mapStateToProps(state) {
    console.log(state, "moviesState")
    return {
        popularTVList: state.getPopularTVList,
        topRatedTVList: state.getTopRatedTVList,
        tvIdDetail: state.getTVdetail,
        tvVideo: state.getTVvideo
    }
}
export default connect(mapStateToProps, { getTVdetail, getTVvideo })(TVshow);