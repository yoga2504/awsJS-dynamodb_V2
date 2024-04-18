const AWS = require('aws-sdk');
AWS.config.update({ 'region': 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

const params = {
    BackupArn: 'arn:aws:dynamodb:us-east-1:211125777234:table/employee/backup/01712760898514-9374e0a9'  
};

dynamodb.deleteBackup(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
