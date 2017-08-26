import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return this.props.children;
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;