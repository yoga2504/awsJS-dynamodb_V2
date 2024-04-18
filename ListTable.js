const AWS = require('aws-sdk');
AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

dynamodb.listTables(function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data['TableNames']);
    }
});
