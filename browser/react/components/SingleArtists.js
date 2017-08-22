import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Songs from './Songs';
import Albums from './Albums';
import {HashRouter, Route} from 'react-router-dom';


export default class SingleArtists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: {},
            artistAlbums: [],
            artistSongs: []
        };
    }

    componentDidMount() {

        const artistid = this.props.match.params.artistId;

        Promise.all(
            [axios.get(`/api/artists/${artistid}`),
                axios.get(`/api/artists/${artistid}/albums`),
                axios.get(`/api/artists/${artistid}/songs`)
            ]
        ).then((arr) => {

            this.setState({artist: arr[0].data});
            this.setState({artistAlbums: arr[1].data});
            this.setState({artistSongs: arr[2].data});
            console.log(this.state);

        }).catch(console.error);

        // console.log(this.state);
    } //componentDidMount



    render(){

    const artist = this.state.artist;
    const albums = this.state.artistAlbums;
    const songs = this.state.artistSongs;

        return (
            <div>
              <h3>{ artist.name }</h3>
              <ul className="nav nav-tabs">
                <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
                <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
              </ul>

              <HashRouter>
                <div>
                <Route path="/artists/:artistId/albums" render={() => <Albums albums={albums} />} />
                <Route path="/artists/:artistId/songs" render={() => <Songs songs={songs} />} />
                </div>
              </HashRouter>

            </div>
        )
    } //render

} //component
