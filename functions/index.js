const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const database = admin.firestore();

exports.getMasterRef = functions.https.onRequest(async (request, response) => {
    const FirestoreObject = {
        masterRef: await request.body['masterRef']
    };

    console.log(Object.values(FirestoreObject)[0]);

    database
        .collection('Prismic-Data')
        .doc('H6BlfDDg4uU7eGZ68lkR')
        .set(FirestoreObject);

    response.send('cloud function executed !');
});
