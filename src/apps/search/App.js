
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const items = [
    { name: 'Rendering with React', slug: 'rendering' },
    { name: 'Components', slug: 'components' },
    { name: 'Props v. State', slug: 'props-v-state' },
];

const Topic = ({ topicId }) => (
    <h3>{topicId}</h3>
);

export default class App extends Component {
    constructor(props) {
        super(props);

        console.log(props)
    }

    render() {
        const { match } = this.props;

        return(
            <div>
                <div>Search</div>

                <ul>
                    {items.map(({ name, slug }) => (
                        <li key={name}>
                            <Link to={`${match.url}/${slug}`}>{name}</Link>
                        </li>
                    ))}
                </ul>

                {items.map(({ name, slug }) => (
                    <Route
                        key={name}
                        path={`${match.path}/${slug}`}
                        render={() => (
                            <Topic topicId={name} />
                        )} />
                ))}

                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        )
    }
}