const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.helloWorld = functions.https.onRequest(async (request, response) => {
    const FirestoreObject = {
        masterRef: request.body['masterRef']
    };

    // set Data
    db.collection('prismicWebHook')
        .doc('ZtM38IhHFhlgXonX2NsW')
        .set(FirestoreObject);

    response.send('cloud function executed !');
});
