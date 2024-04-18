const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient(); // Corrected initialization of DocumentClient
const table = "Movies";
const year = 2022;
const title = "New movie";
const params = {
    TableName: table,
    Key: {
        "year": year,
        "title": title
    },
    UpdateExpression: "set info.rating = :r, info.plot = :p, info.actors = :a",
    ExpressionAttributeValues: {
        ":r": 5.5,
        ":p": "This is updated plot",
        ":a": ["First", "second", "third"]
    },
    ReturnValues: "UPDATED_NEW"
};

console.log("Updating the movie .... ");
docClient.update(params, function(err, data) {
    if(err) {
        console.log("Unable to update the movie", err);
    } else {
        console.log(data);
    }
});
