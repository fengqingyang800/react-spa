/**
 * @file App.js
 * @author deo
 *
 */

import React, { Component } from 'react';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom';
import {} from 'react-router';
import userInfoAction from './actions/userinfo';
import store from './store';
import Bundle from './bundle';
// 获取路由配置
import routes from './apps';
// 同步加载的组件
import Nav from './common/Nav';

// 把 <Route> 组件像这样包一层，然后在需要使用 <Route> 的地方使用 <RouteWithSubRoutes>
const RouteWidthRoutes = ({...route}) => {
    return (
        <Route path={route.path} render={props => {
            // 把自路由向下传递来达到嵌套。
            return <route.component {...props} routes={route.routes}/>
        }} />
    )
};

/**
 * 404
 * @param location
 * @constructor
 */
const NoMatch = ({location}) => (
    <div>No Match {location.pathname}</div>
);

/**
 * 根据 routes 获取导航栏配置
 * @type {Array}
 */
const navConfig = routes.map(item => ({
    path: item.path,
    title: item.title,
}));

/**
 * 封装为 Route 动态组件
 * @returns {XML}
 * @constructor
 */
const AppRoute = () => (
    <Switch>
        {routes.map((route, index) => (
            <RouteWidthRoutes
                key={index}
                {...route}
            />
        ))}
        <Route
            path="/login"
            render={props => (
                <Bundle load={Login}>
                    {(App) => <App {...props} />}
                </Bundle>
            )}
        />
        <Route component={NoMatch} />
    </Switch>
);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        store.dispatch(userInfoAction());

        // this.unsubscribe = store.subscribe(() => {});
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}


    render() {
        return (
            <div>
                <Nav arr={navConfig} />
                <AppRoute routes={routes} />
            </div>
        );
    }
}
