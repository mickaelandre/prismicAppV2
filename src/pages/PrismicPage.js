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
        //Recupération masterRef
        const res_temp = await fetch(prismicConfig.apiEndpoint);
        const json_MasterRef = await res_temp.json();
        const MasterRef = Object.values(json_MasterRef.refs[0].ref).join('');

        //Récupération de toutes les pages publiées sur la nouvelle masterRef
        const result = await fetch(prismicConfig.apiEndpoint + `/documents/search?ref=${MasterRef}`);
        const data = await result.json();
        if (data !== null && data !== undefined) {
            console.log(data.results[0]);
        }
        //Detection si on a pas de publication
        if (data.results[0] === undefined) {
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
        const { notFound } = this.state;
        const { history } = this.props;
        console.log(notFound);
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
                    <h1>NOTHING PUBLISHED</h1>
                )}
            </div>
        );
    }
}

export const PrismicPage = PrismicPageComponent;
