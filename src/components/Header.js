import React from 'react';
import {Link, navigate} from '@reach/router';


const Header = (props) => {
    return (
        <div>
            <h1>Welcome to my Karaoke Collection</h1>
            <div>
                <button onClick={() => navigate("/karaoke")}>List All</button>
                <button onClick={() => navigate("/karaoke/new")}>Create New</button>
                {/* <button onClick={() => navigate("/karaoke/")}>List All</button>
                <button onClick={() => navigate("/karaoke")}>List All</button> */}
            </div>
        </div>
    )
};

export default Header;