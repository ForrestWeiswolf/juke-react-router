import React, {Component} from 'react';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums';


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

            return (
                <div>
                    <h3>{artist.name}</h3>
                    <AllAlbums albums={this.state.artistAlbums} />
                    <h4>Songs</h4>
                    <Songs songs={this.state.artistSongs} />
                </div>
            )
        } //render



} //component