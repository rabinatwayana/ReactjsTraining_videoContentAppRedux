// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Link } from "react-router-dom"
// import { setCurrentID, getMovieDetail, getMovieVideo } from "../actions"
// import "../style/index.css"

// class Movie extends Component {
//     componentDidMount() {
//         console.log(this.props.match.params.movieid, "movieeeemmmmm")
//         this.props.getMovieDetail(this.props.match.params.movieid)
//         this.props.getMovieVideo(this.props.match.params.movieid)
//     }
//     render() {
//         const imgURL = "https://image.tmdb.org/t/p/w500/";
//         return (
//             <div>
//                 <div className="container" >
//                     {/* <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies Online</h3> */}
//                     <nav aria-label="breadcrumb">
//                         <ol className="breadcrumb">
//                             <li key="Homelink" className="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
//                             <li key="Movieslink" className="breadcrumb-item"><Link to="/movies"><span style={{ color: "black", fontWeight: "bold" }}>Movies</span></Link></li>
//                             <li key="Movielink" className="breadcrumb-item"><span style={{ color: "black", fontWeight: "bold" }}>{this.props.movieIdDetail.original_title}</span></li>
//                         </ol>
//                     </nav>
//                     <h4 style={{ marginTop: "10px", background: "#313131", color: "white", padding: "10px", paddingLeft: "385px" }}>WATCH MOVIES ONLINE</h4>

//                     <div style={{ marginLeft: "0px" }} className="row">
//                         <div style={{ marginTop: "0px", width: "90", background: " #313131" }} className="col-md-8">
//                             <iframe style={{ marginTop: "13px" }} width="100%" height="400" src={`https://www.youtube.com/embed/${this.props.movieVideo}`}>
//                             </iframe>

//                             <div style={{ marginTop: "13px" }} className="row">
//                                 <div className="col-md-4">
//                                     <div className="card-single" >
//                                         <img className="img-fluid cardimg-single" src={`${imgURL}${this.props.movieIdDetail.poster_path}`} alt="not found" />
//                                     </div>
//                                 </div>
//                                 <div style={{ height: "325px", margin: "0", width: "90", background: " #313131" }} className="col-md-8">
//                                     <h6 style={{ color: "white" }}> Title : {this.props.movieIdDetail.original_title}</h6>
//                                     <h6 style={{ color: "white" }}> Release Date : {this.props.movieIdDetail.release_date}</h6>
//                                     <h6 style={{ color: "white" }}> Budget : {this.props.movieIdDetail.budget}</h6>

//                                     {/* <h6 style={{color:"white"}}> Budget : {this.state.movieIdDetail.production_companies.map((comp)=>(<span>comp</span>))}</h6> */}

//                                     {/* {this.state.movieIdDetail.genres.map((genre)=>(
//                             <p> {genre.map}</p>
//                         ))} */}

//                                     {/* <p>Genre:{this.state.movieIdDetail.genres.map((genre)=>(console.log(genre.name)))}</p> */}
//                                     <p style={{ color: "white", marginTop: "20px" }}> {this.props.movieIdDetail.overview}</p>

//                                 </div>


//                             </div>
//                         </div>

//                         <div className="col-md-4">
//                             <div >
//                                 <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>POPULAR MOVIE</h5>

//                                 <div className="side-column">
//                                     {this.props.popularMovieList.map((movie) =>
//                                         (
//                                             <>
//                                                 <div className="row">
//                                                     <div className="col-md-7">
//                                                         <iframe style={{ marginTop: "13px" }} width="100%" height="100" src={`https://www.youtube.com/embed/${this.state.movieVideo}`}>
//                                                         </iframe>
//                                                     </div>
//                                                     <div style={{ paddingTop: "10px" }} className="col-md-5">
//                                                         <h7 style={{ color: "white" }} >{movie.title}</h7>

//                                                     </div>
//                                                 </div>
//                                             </>
//                                         )
//                                         // <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/movies/${movie.id}`}><span style={{ color: "white" }}>{movie.title}</span></Link></li>


//                                     )}
//                                 </div>

//                             </div>

//                             {/* <div >
//                                 <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>POPULAR MOVIE</h5>

//                                 <ul className=" side-column">
//                                     {this.props.popularMovieList.map((movie) =>
//                                         <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/movies/${movie.id}`}><span style={{ color: "white" }}>{movie.title}</span></Link></li>
//                                     )}
//                                 </ul>
//                             </div> */}


//                             <div >
//                                 <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>TOP RATED MOVIE</h5>

//                                 <ul className="side-column" >
//                                     {this.props.topRatedMovieList.map((movie) =>
//                                         <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/movies/${movie.id}`}><span style={{ color: "white" }}>{movie.title}</span></Link></li>
//                                     )}
//                                 </ul>
//                             </div>




//                         </div>





//                     </div>

//                     {/* <div className="row">
//                     <div className="col-md-8">
//                         <p style={{ color: "white", marginLeft: "12px", marginTop: "20px" }}> {this.state.movieIdDetail.overview}</p>

//                     </div>
//                     </div> */}

//                 </div>
//             </div>
//         )
//     }
// }
// function mapStateToProps(state) {
//     console.log(state, "movieState")
//     return {
//         currentID: state.set_CurrentID,
//         movieIdDetail: state.getMovieDetail,
//         movieVideo: state.getMovieVideo,
//         popularMovieList: state.getPopularMovie,
//         topRatedMovieList: state.getTopRatedMovie,

//     }
// }
// export default connect(mapStateToProps, { setCurrentID, getMovieDetail, getMovieVideo })(Movie);


import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
// import "../style.css"
import "../style/index.css"
import { API_Key } from "../components/Constants"


// import { API_Key } from "./Constants"



class Movie extends Component {
    state = {
        movieID: "1",
        movieIdDetail: '',
        movieVideo: '',
        searchName: "",
        searchMovie: false,

        popularMovieList: [],
        topRatedMovieList: [],
        movieVideoList: [],
    }
    componentDidMount() {
        console.log("compdidmount")
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

    render() {
        let movieid = this.props.match.params.movieid;
        // var companies = this.state.movieIdDetail.production_companies
        const imgURL = "https://image.tmdb.org/t/p/w500/";
        let movieDetailURL = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_Key}&language=en-US`
        let videoURL = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_Key}&language=en-US`
        let popularMovieURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`
        let topRatedMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`
        //console.log(this.state.movieVideoList, "movieVideoListtttt")
        //this.state.movieVideoList.map((video) => console.log(video.key, "videooooo"))
        if (this.state.movieID !== movieid) {
            axios({
                method: "get",
                url: movieDetailURL
            })
                .then((response) => (
                    this.setState({
                        movieIdDetail: response.data,
                        movieID: movieid
                    })
                )
                )
                .catch((error) => console.log(error))
            axios({
                method: "get",
                url: videoURL
            })
                .then((response) => (
                    //  console.log(response.data.results[0].key,"checkkk")
                    this.setState({
                        movieVideo: response.data.results[0].key,
                        movieVideoList: response.data.results

                    })
                )
                )
                .catch((error) => console.log(error))


            axios({
                method: "get",
                url: popularMovieURL
            })
                .then((response) => (
                    // console.log(response.data.results[0].key,"checkkk")
                    this.setState({
                        popularMovieList: response.data.results

                    })
                )
                )
                .catch((error) => console.log(error))
            axios({
                method: "get",
                url: topRatedMovie
            })
                .then((response) => (

                    // console.log(response.data.results[0].key,"checkkk")
                    this.setState({
                        topRatedMovieList: response.data.results

                    })
                )
                )
                .catch((error) => console.log(error))
        }

        // console.log(this.state.movieVideoList, "movievideolistttt")
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
                    <div className="container" >
                        {/* <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies Online</h3> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li key="Homelink" className="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                                <li key="Movieslink" className="breadcrumb-item"><Link to="/movies"><span style={{ color: "black", fontWeight: "bold" }}>Movies</span></Link></li>
                                <li key="Movielink" className="breadcrumb-item"><span style={{ color: "black", fontWeight: "bold" }}>{this.state.movieIdDetail.original_title}</span></li>

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
                        <h4 style={{ marginTop: "10px", background: "#313131", color: "white", padding: "10px", paddingLeft: "385px" }}>WATCH MOVIES ONLINE</h4>

                        <div style={{ marginLeft: "0px" }} className="row">
                            <div style={{ marginTop: "0px", width: "90", background: " #313131" }} className="col-md-8">
                                <iframe style={{ marginTop: "13px" }} width="100%" height="400" src={`https://www.youtube.com/embed/${this.state.movieVideo}`}>
                                </iframe>

                                <div style={{ marginTop: "13px" }} className="row">
                                    <div className="col-md-4">
                                        <div className="card-single" >
                                            <img className="img-fluid cardimg-single" src={`${imgURL}${this.state.movieIdDetail.poster_path}`} alt="not found" />
                                        </div>
                                    </div>
                                    <div style={{ height: "325px", margin: "0", width: "90", background: " #313131" }} className="col-md-8">
                                        <h6 style={{ color: "white" }}> Title : {this.state.movieIdDetail.original_title}</h6>
                                        <h6 style={{ color: "white" }}> Release Date : {this.state.movieIdDetail.release_date}</h6>
                                        <h6 style={{ color: "white" }}> Budget : {this.state.movieIdDetail.budget}</h6>

                                        {/* <h6 style={{color:"white"}}> Budget : {this.state.movieIdDetail.production_companies.map((comp)=>(<span>comp</span>))}</h6> */}

                                        {/* {this.state.movieIdDetail.genres.map((genre)=>(
                            <p> {genre.map}</p>
                        ))} */}

                                        {/* <p>Genre:{this.state.movieIdDetail.genres.map((genre)=>(console.log(genre.name)))}</p> */}
                                        <p style={{ color: "white", marginTop: "20px" }}> {this.state.movieIdDetail.overview}</p>

                                    </div>


                                </div>
                            </div>

                            {/* <div className="col-md-1">

                        </div> */}

                            <div className="col-md-4">
                                <div >
                                    <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>POPULAR MOVIE</h5>

                                    <div className="side-column">
                                        {this.state.popularMovieList.map((movie) =>
                                            (
                                                <>
                                                    <div className="row">
                                                        <div className="col-md-7">
                                                            <iframe style={{ marginTop: "13px" }} width="100%" height="100" src={`https://www.youtube.com/embed/${this.state.movieVideo}`}>
                                                            </iframe>
                                                        </div>
                                                        <div style={{ paddingTop: "10px" }} className="col-md-5">
                                                            <h7 style={{ color: "white" }} >{movie.title}</h7>

                                                        </div>
                                                    </div>
                                                </>
                                            )
                                            // <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/movies/${movie.id}`}><span style={{ color: "white" }}>{movie.title}</span></Link></li>


                                        )}
                                    </div>

                                </div>

                                {/* <div >
                                <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>POPULAR MOVIE</h5>

                                <ul className=" side-column">
                                    {this.state.popularMovieList.map((movie) =>
                                        <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/movies/${movie.id}`}><span style={{ color: "white" }}>{movie.title}</span></Link></li>
                                    )}
                                </ul>
                            </div> */}


                                <div >
                                    <h5 style={{ padding: "5px", background: "#313131", color: "white" }}>TOP RATED MOVIE</h5>

                                    <ul className="side-column" >
                                        {this.state.topRatedMovieList.map((movie) =>
                                            <li style={{ color: "white", marginLeft: "-18px" }}> <Link to={`/movies/${movie.id}`}><span style={{ color: "white" }}>{movie.title}</span></Link></li>
                                        )}
                                    </ul>
                                </div>




                            </div>





                        </div>

                        {/* <div className="row">
                    <div className="col-md-8">
                        <p style={{ color: "white", marginLeft: "12px", marginTop: "20px" }}> {this.state.movieIdDetail.overview}</p>
                    
                    </div>
                    </div> */}

                    </div>
                }
            </>
        )
    }
}
export default Movie;