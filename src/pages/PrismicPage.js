import React, {Component} from 'react';
import {prismicConfig} from "../config/prismic.config";
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';

class PrismicPageComponent extends Component {
    state = {
        doc : "",
        notFound: false,
    };


    async getDoc (apiEndpoint){
        //console.log("bouton pressed: " + apiEndpoint);
        const res = await fetch(apiEndpoint + "/documents/search?ref=XJS75RAAABMNYq-b");
        const json = await res.json();
        //return json;
        this.setState({
            doc : json.results[0]
        })
        //console.log(json.results[0].data.title[0].text)
    }


    /*   V2 -
    async getDoc (apiEndpoint){
         const apiResponse = await Prismic.api(apiEndpoint);
         const customDoc = await apiResponse.query(Prismic.Predicates.at('document.type', 'page'));
         if(customDoc){
            this.setState({doc: customDoc.results[0]});
         }
    }
  */



    async componentDidMount(apiEndpoint) {
        /*
        this.setState({
            doc :
        })
        */
        /*
        const apiResponse = await Prismic.api(apiEndpoint);
        const customDoc = await apiResponse.query(Prismic.Predicates.at('document.type', 'page'));
        if(customDoc){
            this.setState({doc: customDoc.results[0]});
        }
        */
    }


// Link Resolver
    linkResolver(doc) {
        // Define the url depending on the document type
        if (doc.type === 'page') {
            return '/page/' + doc.uid;
        }
        return '/';
    }

    render(){
        const apiEndpoint = prismicConfig.apiEndpoint;
        const {doc} = this.state;
        //this.test(apiEndpoint);
        return (
            <div>
                <div> ID :  {doc.id}</div>
                <div> Title :  {!!doc && " dataDoc :" + JSON.stringify(doc.data.title[0].text)}</div>

                <button onClick={() => this.getDoc(apiEndpoint)}>retrieve the doc</button>
            </div>
        );
    }



}
/*

                <div> ID :  {doc.id}</div>
                <div> ID :  {doc.id}</div>
                <div> ID :  {doc.id}</div>
 */

export const PrismicPage = PrismicPageComponent;
