import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import { prismicConfig } from '../config/prismic.config';

class HomePageComponent extends Component {
    state = {
        docTest: {}
    };

    async componentDidMount() {
        Prismic.api(prismicConfig.apiEndpoint).then(api => {
            api.query('').then(response => {
                if (response) {
                    this.setState({ docTest: response.results[0] });
                }
            });
        });
    }

    anyscreenpublished = () => {};

    render() {
        const { docTest } = this.state;
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
                </button>
                <h3>ALOHA</h3>
            </div>
        );
    }
}
export const HomePage = HomePageComponent;
