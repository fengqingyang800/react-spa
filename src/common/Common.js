/**
 * @file CommonApp.jsx
 * @author deo
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '../actions/auth';
import './styles/index.scss';

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）或者 state => state.home（传递指定的state）
 * dispatch用法：
 * （单个action）bindActionCreators(navActions, dispatch)
 * （多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */
@connect(
    state => state,
    dispatch => bindActionCreators({...authActions}, dispatch)
)

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(123)
    }
}