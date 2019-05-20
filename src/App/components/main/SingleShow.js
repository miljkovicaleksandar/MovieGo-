import React from 'react';
import { fetchSingleShow } from './../../services/fetchShows';

class SingleShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleShow: null
        }
    }

    onLoadSingleShow(id) {
        fetchSingleShow(id)
            .then(show => this.setState({ singleShow: show }))
    }
    componentDidMount() {
        this.onLoadSingleShow(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        const id = this.props.match.params.id;
        const prevId = prevProps.match.params.id
        if (id != prevId){
            this.onLoadSingleShow(id);
        }
    }

    render() {
        if (!this.state.singleShow) {
            return "LOADING...........";
        }
        const {name, imgLarge, summary}= this.state.singleShow;
        console.log(this.state.singleShow.cast);
        return <div className="row">
            <img src={`${imgLarge}`} className="col-3 offset-1 movie-img" />
            <div className="single-show-text-wrapper col-3">
            <h3>{name}</h3>
            <p>{summary.slice(3, -4)}</p>
            </div>
        </div>;
    }

}

export default SingleShow;