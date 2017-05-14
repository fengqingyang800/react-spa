/**
 * @file Nav.js
 * @author deo
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 当前导航是否激活
 * @param match
 * @param location
 * @returns {boolean}
 */
const isActive = (match, location) => {
    if (!match) {
        return false;
    }

    return match.path === location.pathname;
};

export default class Nav extends Component {
    constructor(props) {
        super(props);

        // this.handleLogout = ::this.handleLogout;
    }

    render () {
        const { arr } = this.props;

        return (
            <div>
                {arr.map((item, index) => (
                    <div key={index}>
                        <NavLink
                            to={item.path}
                            isActive={isActive}
                        >
                            {item.title}
                        </NavLink>
                    </div>
                ))}
            </div>
        );
    }
}