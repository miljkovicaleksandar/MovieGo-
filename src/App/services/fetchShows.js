import API_BASE_URL from './../shared/baseUrl';
import Show from './../entities/Show';

const fetchShows = () => {

    const API_SHOWS = `${API_BASE_URL}/shows`;

    return fetch(API_SHOWS)
        .then(shows => shows.json())
        .then(shows => {
            console.log(shows)
            return shows.map((show) => new Show(show))
        })
}

const fetchSingleShow = (id) => {

    return fetch(`${API_BASE_URL}/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(singleShow => singleShow.json())
        .then((singleShow) => new Show(singleShow))
}

export {
    fetchShows,
    fetchSingleShow
}