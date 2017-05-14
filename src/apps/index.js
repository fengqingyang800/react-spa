/**
 * @file index.js
 * @author deo
 *
 * apps 总入口，返回配置给总控
 */

import Home from './home';
import Book from './book';
import Search from './search';

export default [
    {
        path: '/',
        title: 'Home',
        exact: true,
        component: Home.App,
    },
    {
        path: '/book',
        title: 'Book',
        component: Book.App,
    },
    {
        path: '/search',
        title: 'Search',
        component: Search.App,
    },
];
