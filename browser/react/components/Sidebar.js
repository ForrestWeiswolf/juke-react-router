import React from 'react';
import {Link} from 'react-router-dom'


const Sidebar = (props) => {
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
            <p>
                <Link to="/albums">ALBUMS</Link>
            </p>
            <p>
                <Link to="/artists">ARTISTS</Link>
            </p>

        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
