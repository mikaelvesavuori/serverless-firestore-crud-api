'use strict';

const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
	projectId: { ID },
	keyFilename: 'keyfile.json'
});

const collection = firestore.collection('posts');

exports.create = (request, response) => {
	const body = request.body;

	collection
		.doc(`${body.title}`)
		.set({
			title: body.title,
			text: body.text
		})
		.then(() => {
			response.sendStatus(200);
		})
		.catch(() => {
			console.warn('Error creating!');
			response.sendStatus(400);
		});
};

exports.read = (request, response) => {
	collection
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				console.log(doc.id, ' => ', doc.data());
			});
		})
		.then(() => {
			response.sendStatus(200);
		})
		.catch(() => {
			console.warn('Error reading!');
			response.sendStatus(400);
		});
};

exports.update = (request, response) => {
	const body = request.body;

	collection
		.doc(`${body.title}`)
		.set({
			text: body.text
		})
		.then(() => {
			response.sendStatus(200);
		})
		.catch(() => {
			console.warn('Error updating!');
			response.sendStatus(400);
		});
};

exports.delete = (request, response) => {
	const body = request.body;

	collection
		.doc(`${body.title}`)
		.delete()
		.then(() => {
			response.sendStatus(200);
		})
		.catch(() => {
			console.warn('Error deleting!');
			response.sendStatus(400);
		});
};
