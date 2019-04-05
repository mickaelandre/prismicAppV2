import React, { Component } from 'react';
import { prismicConfig } from '../config/prismic.config';
import PrismicReact from 'prismic-reactjs';
import Prismic from 'prismic-javascript';

class PrismicPageComponent extends Component {
    state = {
        doc: {},
        notFound: false,
        masterRef: ''
    };

    async componentDidMount() {
        /*On recupere bien la masterRef
        const result = await fetch(prismicConfig.apiEndpoint);
        const json_MasterRef = await result.json();
        const MasterRef = Object.values(json_MasterRef.refs[0].ref).join('');
        */
        //Autre méthode pour récuperer les données de prismic

        Prismic.api(prismicConfig.apiEndpoint).then(api => {
            api.query('').then(response => {
                if (response) {
                    this.setState({ doc: response.results[0] });
                }
            });
        });
    }

    displayTitle = () => {
        const { doc } = this.state;
        console.log(doc);
        const Titles_list = Object.values(doc)[7];
        if (Titles_list !== null && Titles_list !== undefined) {
            return <div style={{ display: 'flex', color: 'red' }}>{Titles_list[0]}</div>;
        }
    };

    render() {
        const { history } = this.props;
        return (
            <div>
                <h2>PRISMIC TEST</h2>
                <button style={{ display: 'flex' }} onClick={() => history.push('/')}>
                    Back to Home
                </button>
                <div style={{ display: 'flex' }}> Data Title : {this.displayTitle()}</div>
            </div>
        );
    }
}

export const PrismicPage = PrismicPageComponent;
