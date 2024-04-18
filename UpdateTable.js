const AWS = require('aws-sdk');
AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: 'employee',
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2
    }
};

dynamodb.updateTable(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
