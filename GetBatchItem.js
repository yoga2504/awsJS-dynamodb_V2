const AWS = require('aws-sdk');
AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    RequestItems: {
        "employee": {
            Keys: [
                {"id": { "S": "1" }},
                {"id": { "S": "5" }},
                {"id": { "S": "3" }},
                {"id": { "S": "4" }}
            ]
        }
    }
};

dynamodb.batchGetItem(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        data.Responses.employee.forEach(function(element, index) {
            console.log(element);
        });
    }
});
