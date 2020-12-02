

import { GET_NOW_PLAYING_TV_LIST, GET_UP_COMING_TV_LIST, GET_POPULAR_TV_LIST, GET_TOP_RATED_TV_LIST, GET_TV_DETAIL, GET_TV_VIDEO } from "../actions/TVindex"

export function getNowPlayingTVList(state = [], action) {

    switch (action.type) {

        case GET_NOW_PLAYING_TV_LIST:
            return action.payload
        default:
            return state
    }
}

export function getUpComingTVList(state = [], action) {

    switch (action.type) {

        case GET_UP_COMING_TV_LIST:
            return action.payload
        default:
            return state
    }
}

export function getPopularTVList(state = [], action) {

    switch (action.type) {

        case GET_POPULAR_TV_LIST:
            return action.payload
        default:
            return state
    }
}

export function getTopRatedTVList(state = [], action) {

    switch (action.type) {

        case GET_TOP_RATED_TV_LIST:
            return action.payload
        default:
            return state
    }
}
export function getTVdetail(state = [], action) {

    switch (action.type) {

        case GET_TV_DETAIL:
            return action.payload
        default:
            return state
    }
}
export function getTVvideo(state = [], action) {

    switch (action.type) {

        case GET_TV_VIDEO:
            return action.payload
        default:
            return state
    }
}
