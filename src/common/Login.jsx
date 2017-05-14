/**
 * @file Login.jsx
 * @author deo
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSwitch = ::this.handleSwitch;
        this.handleLogin = ::this.handleLogin;
    }

    componentWillMount() {
        // Do something
        console.log(this.props);
    }

    handleLogin() {
        // this.props.loginActions()
        //     .then(() => {
        //         this.props.history.push('/');
        //     });
    }

    handleSwitch() {
        // this.props.logoutActions();
    }

    componentWillReceiveProps(nextProps) {
        // const prevState = this.props.location.state;
        // if (this.props.auth.isLogin !== nextProps.auth.isLogin) {
        //     const to = prevState && prevState.from ? prevState.from : '/';
        //     this.props.history.push(to);
        // }
    }

    render() {
        return (
            <div>
                <p>Login Page</p>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}
