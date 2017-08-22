import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtists from './SingleArtists';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter, Route} from 'react-router-dom';
import StatefulAlbums from "./StatefulAlbums";

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <HashRouter>
      <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>

          <div className="col-xs-10">
            <Route path="/" exact={true} component={StatefulAlbums} />
            <Route path="/albums" exact={true} component={StatefulAlbums} />
            <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route path="/artists" exact={true} component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtists} />
          </div>

        <Player />

      </div>
      </HashRouter>
    );
  }
}
