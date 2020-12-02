import axios from "axios"
import { API_Key } from "../components/Constants"
export const GET_NOW_PLAYING_TV_LIST = "GET_NOW_PLAYING_TV_LIST"
export const GET_UP_COMING_TV_LIST = "GET_UP_COMING_TV_LIST"
export const GET_POPULAR_TV_LIST = "GET_POPULAR_TV_LIST"
export const GET_TOP_RATED_TV_LIST = "GET_TOP_RATED_TV_LIST"
export const GET_TV_DETAIL = "GET_TV_DETAIL"
export const GET_TV_VIDEO = "GET_TV_VIDEO"

export function getNowPlayingTVList(dispatch) {
    return function (dispatch) {
        console.log("now play tv")
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_NOW_PLAYING_TV_LIST,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}

export function getUpcomingTVList(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_UP_COMING_TV_LIST,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getPopularTVList(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_POPULAR_TV_LIST,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}
export function getTopRatedTVList(dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_Key}&language=en-US&page=1`
        })
            .then((response) => {
                dispatch({
                    type: GET_TOP_RATED_TV_LIST,
                    payload: response.data.results
                })
            })
            .catch((error) => console.log(error))
    }
}

export function getTVdetail(tvid, dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/${tvid}?api_key=${API_Key}&language=en-US`
        })
            .then((response) => {
                dispatch({
                    type: GET_TV_DETAIL,
                    payload: response.data
                })
            })
            .catch((error) => console.log(error))
    }
}


export function getTVvideo(tvid, dispatch) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/${tvid}/videos?api_key=${API_Key}&language=en-US`
        })
            .then((response) => {
                dispatch({
                    type: GET_TV_VIDEO,
                    payload: response.data.results[0].key
                })
            })
            .catch((error) => console.log(error))
    }
}