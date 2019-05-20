import React from 'react';
import ShowCard from './ShowCard';
import { fetchShows } from './../../services/fetchShows';

class ListOfShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slicedListOfShows: []
        }
    }

    onLoadShows() {
        fetchShows()
            .then((shows) => {
                const slicedShows = shows.slice(0, 50);
                this.setState({ slicedListOfShows: slicedShows })
            })
    }

    componentDidMount() {
        this.onLoadShows()
    }

    render() {
        if (!this.state.slicedListOfShows) {
            return 'LOADING.........'
        }
        const { slicedListOfShows } = this.state;
        return (
            <>
                <div className="row col-10 offset-2">
                    {slicedListOfShows.map((show) => {
                        return <ShowCard show={show} key={`${show.id}`} />
                    })}
                </div>
            </>
        )
    }
}

export default ListOfShows;
