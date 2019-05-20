import React from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from './../services/fetchShows';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allShows: [],
            searchValue: "",
            isVisible: false
        }
        this.setSearchValue = this.setSearchValue.bind(this);
        this.onInputFocus= this.onInputFocus.bind(this);
        this.onInputFocusOut= this.onInputFocusOut.bind(this);
    }

    onLoadShows() {
        fetchShows()
            .then(shows => this.setState({ allShows: shows }))
    }

    setSearchValue(e) {
        this.setState({ searchValue: e.target.value });
    }

    onInputFocus() {
        this.setState({ isVisible: true })
    }

    onInputFocusOut() {
        setTimeout(()=>this.setState({ isVisible: false }), 200)
    }


    componentDidMount() {
        this.onLoadShows();
    }

    render() {
        const filteredShows = this.state.allShows
            .filter(show => show.name.toLowerCase().includes(this.state.searchValue.toLowerCase())).slice(0, 10);
        return (
            <>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">
                            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top"
                                alt="" />
                            BIT SHOW
                    </Link>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" onFocus={this.onInputFocus} onBlur={this.onInputFocusOut}type="search" placeholder="Search" aria-label="Search" onChange={this.setSearchValue} value={this.state.searchValue} />
                            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top"
                                alt="" />
                            {/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button> */}
                        </form>
                    </nav>
                </header>
                
                <div className={this.state.isVisible ? "visible" : "hidden"}>
                    {filteredShows.map(show => <Link to={`/show-details/${show.id}`} key={show.id}><p>{show.name}</p></Link>)}
                </div>
               
            </>
        )
    }
}

export default Header;