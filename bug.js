```javascript
// Incorrect usage of $inc operator in MongoDB update operation.
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity:1}});
```