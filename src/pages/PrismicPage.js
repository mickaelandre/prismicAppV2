import React, {Component} from 'react';
import { prismicConfig } from "../config/prismic.config";
import PrismicReact from 'prismic-reactjs';

class PrismicPageComponent extends Component {
    state = {
        doc : null,
        notFound: false,
    };
    render() {
        return (
            <div>

            </div>
        );
    }
}

export const PrismicPage = PrismicPageComponent;
