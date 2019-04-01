import React from 'react';
import firebase from 'firebase';

// TODO : créer un fichier de config
// TODO : Renommer la collection
// TODO : Mettre le firebase init dans un fichier séparé

const config = {
    apiKey: 'AIzaSyBdgB63T8lkAxg_I-ox1uoqufF34cooge0',
    authDomain: 'prismic-webhook.firebaseapp.com',
    databaseURL: 'https://prismic-webhook.firebaseio.com',
    projectId: 'prismic-webhook',
    storageBucket: 'prismic-webhook.appspot.com',
    messagingSenderId: '706485423538'
};

firebase.initializeApp(config);

const getUpdate = () => {
    const mydoc = firebase
        .firestore()
        .collection('prismicWebHook')
        .doc('ZtM38IhHFhlgXonX2NsW');

    const observer = mydoc.onSnapshot(
        docSnapshot => {
            //docSnapshot.data().masterRef;
            console.log(docSnapshot.data().masterRef);
            //return response;
        },
        err => {
            console.log(`Encountered error: ${err}`);
        }
    );
    console.log('observer : ' + Object.keys(observer));
};

export class Firestore extends React.Component {
    componentDidMount() {
        getUpdate();
    }

    render() {
        return (
            <div>
                <p> Firestore : </p>
            </div>
        );
    }
}
