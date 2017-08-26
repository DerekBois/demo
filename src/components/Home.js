import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/sign-up">Sign Up</Link>
                {` | `}
                <Link to="/">Sign In</Link>
            </div>
        );
    }
}

export default Home;