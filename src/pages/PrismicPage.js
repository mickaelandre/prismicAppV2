import React, { Component } from 'react';
import { prismicConfig } from '../config/prismic.config';
import PrismicReact from 'prismic-reactjs';
import Prismic from 'prismic-javascript';

class PrismicPageComponent extends Component {
    state = {
        doc: {},
        notFound: false
    };

    async componentDidMount() {
        const { doc } = this.state;
        //On recupere bien la masterRef
        const result = await fetch(prismicConfig.apiEndpoint);
        const json_MasterRef = await result.json();
        const MasterRef = Object.values(json_MasterRef.refs[0].ref).join('');

        Prismic.api(prismicConfig.apiEndpoint).then(api => {
            api.query('').then(response => {
                if (response) {
                    console.log(response.results[0]);
                    this.setState({ doc: response.results[0] });
                }
            });
        });

        console.log(json_MasterRef);
    }
    render() {
        const { doc } = this.state;
        const { history } = this.props;
        //this.getData();
        console.log(doc);
        return (
            <div>
                <h2>PRISMIC TEST</h2>
                <button style={{ display: 'flex' }} onClick={() => history.push('/')}>
                    {' '}
                    Back to Home
                </button>
            </div>
        );
    }
}

export const PrismicPage = PrismicPageComponent;
