import React, { Component } from 'react';
import './ListMovies.css'


class ListMovies extends Component {

    render() {
        return (
            <div className="ListMovies" onClick={_ => this.props.getIdMovie(this.props.id)}>
            {this.props.resultKey ?
                <img src={`https://image.tmdb.org/t/p/w300${this.props.resultKey}`} alt={this.props.title} className='zoom' />
                :
                <img src={'https://cdn.browshot.com/static/images/not-found.png'} alt={this.props.title} />
            }
            </div>
        );
    }
}

export default ListMovies;
