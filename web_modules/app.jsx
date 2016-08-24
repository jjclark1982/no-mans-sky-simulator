import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{process.env.PACKAGE_DESCRIPTION}</h1>
            </div>
        );
    }
}
