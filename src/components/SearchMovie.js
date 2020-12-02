import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
// import "../style.css"
import "../style/index.css"


class SearchMovie extends Component {

    componentDidMount() {
        console.log("I am mounted")

        // axios({
        //     method: "get",

        //     url: `https://api.themoviedb.org/3/search/movie?api_key=5fb39aafdaca3d9adb53b3ea67333948&language=en-US&query=${this.state.searchName}&page=1&include_adult=false`
        // }).then((res) => {
        //     let serchResult = res.data.results

        //     console.log(serchResult, "rrrrrr")


        // })
        //     .catch((res) => console.log(res))
    }

    render() {
        console.log(this.props, "searchprops")
        return (
            <>

                <div className="container">
                    <h3 style={{ color: "white", paddingTop: "10px", marginLeft: "10px" }}>Watch Movies Online</h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li key="Homelink" className="breadcrumb-item"><Link to="/"><span style={{ color: "black", fontWeight: "bold" }}>Home</span></Link></li>
                            <li key="Movielink" className="breadcrumb-item"><span style={{ color: "black", fontWeight: "bold" }}>Movies</span></li>
                        </ol>
                    </nav>

                    <div className="top-search">
                        <form onSubmit={this.handleSubmit}>
                            <input className="form-control search" onChange={this.onChange} name="searchName" value={this.state.searchName} type="text" placeholder="search movies" />
                            <button type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </>
        )
    }
}

export default SearchMovie
