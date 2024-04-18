const AWS = require('aws-sdk');
AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();
const params = {
    Key: {
        "id": { S: '3' }
    },
    TableName: 'employee'
};

dynamodb.getItem(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});
