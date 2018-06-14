import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{

    static propTypes = {
        title : PropTypes.string,
        poster : PropTypes.string
    }

    state = {
        greeting : "Hello"
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                greeting : "Hello Again"
            })
        }, 5000)
    }

    render(){
        {this.state.greeting};
        console.log(this.props.title);
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

class MoviePoster extends Component {

    render(){
        console.log(this.props);
        return(
            <img src={this.props.poster}/>
        )
    }

}

export default Movie;