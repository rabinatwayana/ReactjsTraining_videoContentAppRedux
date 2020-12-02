import {
    movieList, upComingMovieList, set_CurrentID, getMovieDetail, getMovieVideo, getPopularMovie,
    getTopRatedMovie, getMovieBanner, getTVBanner, getInitialBanner
} from './movies_reducers';
import { combineReducers } from "redux";
import { getNowPlayingTVList, getUpComingTVList, getPopularTVList, getTopRatedTVList, getTVdetail, getTVvideo } from "./tv_reducers"


const rootReducers = combineReducers({
    movieList,
    upComingMovieList,
    set_CurrentID,
    getMovieDetail,
    getMovieVideo,
    getPopularMovie,
    getTopRatedMovie,
    getMovieBanner,
    getTVBanner,
    getInitialBanner,
    getNowPlayingTVList,
    getUpComingTVList,
    getPopularTVList,
    getTopRatedTVList,
    getTVdetail,
    getTVvideo

})

export default rootReducers;