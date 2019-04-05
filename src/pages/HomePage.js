import React, { Component } from 'react';

class HomePageComponent extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <h1>Welcome page</h1>{' '}
                <button
                    onClick={() => {
                        history.push('/prismic');
                    }}
                >
                    Try Me
                </button>{' '}
                <h3>TEST</h3>
            </div>
        );
    }
}
export const HomePage = HomePageComponent;
