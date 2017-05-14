
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    state => state,
)
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        const { userinfo } = this.props;

        return(
            <div>Homeeeee Hello {userinfo.data.name}</div>
        )
    }
}