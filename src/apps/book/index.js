
import React, { Component } from 'react';
// bundle模型用来异步加载组件
import Bundle from '../../bundle';
import App from 'bundle-loader?lazy!./App';

export default {
    App: props => (
        <Bundle load={App}>
            {(App) => <App {...props} />}
        </Bundle>
    ),
    // reducers,
    // actions,
    // service,
    // routers,
    // locale,
}