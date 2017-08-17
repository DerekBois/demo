import React from 'react';
import PropTypes from 'prop-types';

class FullLayout extends React.Component {
    render() {
        return (
            <div className="full">
                {this.props.children}
            </div>
        );
    }
}
FullLayout.propTypes = {
    children: PropTypes.object.isRequired
};
export default FullLayout;