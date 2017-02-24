import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as ActionCreator from '../actions';
import {bindActionCreators} from 'redux';
import Home from './Home';

class AppContainer extends Component {
    render() {
        return (
           <Home {...this.props} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipeCount: state.recipeCount
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreator.ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
