import React, {Component} from 'react';
import Albums from './Albums';
import axios from 'axios';

export default class StatefulAlbums extends Component {
    constructor(props) {
        super(props)
        this.state = {albums: []}
    }

    componentDidMount () {
        axios.get('/api/albums/')
            // .then(res => console.log(res));
            .then(res => res.data)
            .then(albums => {
                this.setState({ albums })
            });
    }


    render() {
        return (
            <Albums albums={this.state.albums} />
        )
    }

}
