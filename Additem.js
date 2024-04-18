const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' }); 

const dynamodb = new AWS.DynamoDB(); 

const params = {
    TableName: 'employee',
    Item: {
        'id': { S: '1' }, 
        'name': { S: 'Bob' },
        'age': { S: '23' } 
    }
};

dynamodb.putItem(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


    