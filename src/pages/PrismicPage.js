import React, { Component } from 'react';
import { prismicConfig } from '../config/prismic.config';
import { NoPublicationPage } from './NoPublicationPage';
const Prismic = require('prismic-javascript');

class PrismicPageComponent extends Component {
    state = {
        doc: null,
        notFound: false,
        masterRef: ''
    };

    async componentDidMount() {
        const api = await Prismic.api(prismicConfig.apiEndpoint);
        const response = await api.query('');
        const doc_temp = response.results
            .sort((a, b) => a.last_publication_date < b.last_publication_date)
            .map(val => val.data);
        this.setState({
            doc: doc_temp
        });

        //Detection si on a pas de publication
        if (typeof doc_temp !== 'undefined' && doc_temp.length > 0) {
            this.setState({ notFound: false });
        } else {
            this.setState({ notFound: true });
        }
    }

    displayTitle = () => {
        const { doc } = this.state;
        if (!!doc) {
            const Titles_list = Object.values(doc)[7];
            if (Titles_list !== null && Titles_list !== undefined) {
                return <div style={{ display: 'flex', color: 'red' }}>{Titles_list[0]}</div>;
            }
        }
    };

    render() {
        const { notFound, doc } = this.state;
        const { history } = this.props;
        console.log(doc);
        return (
            <div>
                {notFound === false ? (
                    <div>
                        <h2>PRISMIC TEST</h2>
                        <button style={{ display: 'flex' }} onClick={() => history.push('/')}>
                            Back to Home
                        </button>
                        <div style={{ display: 'flex' }}> Data Title : {this.displayTitle()}</div>
                    </div>
                ) : (
                    <NoPublicationPage />
                )}
            </div>
        );
    }
}
export const PrismicPage = PrismicPageComponent;
