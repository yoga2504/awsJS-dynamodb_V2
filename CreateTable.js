const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: "Movies",
    KeySchema: [
        {
            AttributeName: 'year', // Partition Key
            KeyType: 'HASH'
        },
        {
            AttributeName: 'title', // Sort Key
            KeyType: 'RANGE'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'year',
            AttributeType: 'N'
        },
        {
            AttributeName: 'title',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 4,
        WriteCapacityUnits: 4
    }
};

dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log('Table created', data);
    }
});
