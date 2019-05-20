import React from 'react';
import {Link} from 'react-router-dom';


const ShowCard = (props) => {
    return (
        <Link to={`show-details/${props.show.id}`} className="card col-3 card-width show-card">
        <div data-id={`${props.show.id}`}>
            <img src={`${props.show.img}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{props.show.name}</p>
                </div>
         </div >
         </Link>
            )
        }
        
export default ShowCard;