
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import bookActions  from '../../actions/book';

@connect(
    state => state,
    dispatch => bindActionCreators({bookActions}, dispatch)
)
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.bookActions();
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const { book, userinfo } = this.props;

        return(
            <div>
                <div>books {userinfo.data.name}</div>

                {book.data && book.data.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))}
            </div>
        )
    }
}