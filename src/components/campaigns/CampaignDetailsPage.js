import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SubNav from '../common/SubNav';
import * as campaignActions from '../../actions/campaignActions';

class CampaignDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // this.state = {
        //     campaign: Object.assign({}, this.props.campaign),
        //     errors: {},
        //     saving: false
        // };





        // this.saveCourse = this.saveCourse.bind(this);
        // this.updateCourseState = this.updateCourseState.bind(this);
        // this.redirect = this.redirect.bind(this);
        // this.courseFormIsValid = this.courseFormIsValid.bind(this);
    }

    componentWillMount() {
        console.log(this.props.params.slug);
        console.log(this.props);
    }


    componentWillReceiveProps(nextProps) {
        // if (this.props.campaign.slug != nextProps.course.slug) {
        //     this.setState({campaign: Object.assign({}, nextProps.campaign)});
        // }
    }




    render() {
        // grab campaigns here and pass down?
        return (
            <div className="main-wrapper">
                <SubNav 
                    route={this.props.route}
                    path={this.props.location.pathname}
                />
                <div className="main">
                    <h1>Something</h1>
                </div>
            </div>
        );
    }
}
// CampaignDetailsPage.propTypes = {
//     children: PropTypes.object.isRequired
// };
// function mapStateToProps(state, ownProps) {
//     //let currentUser = {email: 'admin@smp.com', password: 'admin123', confirm: 'admin123'};

//     console.log(state);

//     return {
//         currentUser: currentUser
//     };
// }
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(campaignActions, dispatch)
    };
}
export default connect(mapDispatchToProps)(CampaignDetailsPage);