import axios from "axios"
import { API_Key } from "../components/Constants"

export const Display_Movie_List = "Display_Movie_List"
export const Get_Upcoming_Movielist = "Get_Upcoming_Movielist"
export const SET_CURRENT_ID = "SET_CURRENT_ID"
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
export const GET_MOVIE_VIDEO = "GET_MOVIE_VIDEO"
export const GET_POPULAR_MOVIE = "GET_POPULAR_MOVIE"
export const GET_TOPRATED_MOVIE = "GET_TOPRATED_MOVIE"
export const GET_MOVIE_BANNER = "GET_MOVIE_BANNER"
export const GET_TV_BANNER = "GET_TV_BANNER"
export const GET_INITIAL_BANNER = "GET_INITIAL_BANNER"



export function displayMovieList(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {

                dispatch({
                    type: Display_Movie_List,
                    payload: response.data.results
                })
            }
            )
            .catch((error) => console.log(error))
    }
}


export function getUpcomingMovieList(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: Get_Upcoming_Movielist,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}

export function setCurrentID(id, dispatch) {
    return function (dispatch) {
        return dispatch({
            type: SET_CURRENT_ID,
            payload: id
        })
    }
}
export function getMovieDetail(id, dispatch) {
    console.log("actioncreated")
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_Key}&language=en-US`
        })
            .then((response) => {
                dispatch({
                    type: GET_MOVIE_DETAIL,
                    payload: response.data
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getMovieVideo(id, dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_Key}&language=en-US`
        })
            .then((response) => {
                dispatch({
                    type: GET_MOVIE_VIDEO,
                    payload: response.data.results[0].key
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getPopularMovie(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_POPULAR_MOVIE,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getTopRatedMovie(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_TOPRATED_MOVIE,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}

export function getMovieBanner(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_MOVIE_BANNER,
                    payload: response.data.results.slice(12, 18)
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getInitialBanner(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_INITIAL_BANNER,
                    payload: response.data.results.slice(10, 11)[0]
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getTVBanner(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_TV_BANNER,
                    payload: response.data.results.slice(12, 18)
                })
            })
            .catch((error) => console.log(error))
    }
}

