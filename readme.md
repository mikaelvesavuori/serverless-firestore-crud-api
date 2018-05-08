# CRUD API using Serverless (Google Cloud Functions and Firestore)

This is a basic demonstration for how to do CRUD tasks (Create, Read, Update, Delete) in an API-like way on a Firestore database.

What's so sweet is that you don't need to set up any kind of server or other typical backend stuff – just write your code! Serverless for the win :)

## Get started

1.  Make sure your credentials are in order (read more at [Serverless](https://serverless.com/framework/docs/providers/google/guide/credentials/))
2.  Create a `keyfile.json` in the root of the project (read more at [Google](https://cloud.google.com/iam/docs/creating-managing-service-account-keys))
3.  Update `projectId` in the instance called `firestore`
4.  Run `serverless deploy`

## CLI Commands

The command `serverless` can also be used in its shorthand form `sls`.

* `serverless invoke -f create -d '{ "title": "Some title", "text": "Content goes here" }`: Create new document in the **posts** collection
* `serverless invoke -f read`: Read all **posts** documents (outputs to console)
* `serverless invoke -f update -d '{ "title": "Some title", "text": "This is the new text" }'`: Update a named document with new text
* `serverless invoke -f delete -d '{ "title": "094BejwD5tF3lQZfKZnR" }'`: Delete a named document
