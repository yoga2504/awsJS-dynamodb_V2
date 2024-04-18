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
    }
}; // Corrected params object declaration
console.log("Retrieving the movie...");
docClient.get(params, function (err, data) {
    if (err) {
        console.log("Unable to get movie", err);
    } else {
        console.log(data.Item); // Corrected logging of item data
    }
}); // Corrected syntax for docClient.get method
