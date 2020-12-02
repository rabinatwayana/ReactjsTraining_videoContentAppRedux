import {
    Display_Movie_List, Get_Upcoming_Movielist, SET_CURRENT_ID, GET_MOVIE_DETAIL, GET_MOVIE_VIDEO,
    GET_POPULAR_MOVIE, GET_TOPRATED_MOVIE, GET_MOVIE_BANNER, GET_TV_BANNER, GET_INITIAL_BANNER
} from "../actions"


const initialState = {
    movielist: []
}

export function movieList(state = [], action) {

    switch (action.type) {

        case Display_Movie_List:
            console.log(action.payload, "payload")
            return action.payload
        default:
            return state
    }
}
export function upComingMovieList(state = [], action) {

    switch (action.type) {

        case Get_Upcoming_Movielist:

            return action.payload
        default:
            return state
    }
}

export function set_CurrentID(state = null, action) {
    switch (action.type) {
        case SET_CURRENT_ID:
            return action.payload
        default:
            return state
    }
}
export function getMovieDetail(state = null, action) {
    // console.log(action.payload, "payload")
    switch (action.type) {
        case GET_MOVIE_DETAIL:
            return action.payload
        default:
            return state
    }
}
export function getMovieVideo(state = null, action) {
    switch (action.type) {
        case GET_MOVIE_VIDEO:
            return action.payload
        default:
            return state
    }
}
export function getPopularMovie(state = null, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIE:
            return action.payload
        default:
            return state
    }
}
export function getTopRatedMovie(state = null, action) {
    switch (action.type) {
        case GET_TOPRATED_MOVIE:
            return action.payload
        default:
            return state
    }
}
export function getMovieBanner(state = null, action) {
    switch (action.type) {
        case GET_MOVIE_BANNER:
            return action.payload
        default:
            return state
    }
}
export function getTVBanner(state = null, action) {
    switch (action.type) {
        case GET_TV_BANNER:
            return action.payload
        default:
            return state
    }
}
export function getInitialBanner(state = null, action) {
    switch (action.type) {
        case GET_INITIAL_BANNER:
            return action.payload
        default:
            return state
    }
}
// export default movieList;