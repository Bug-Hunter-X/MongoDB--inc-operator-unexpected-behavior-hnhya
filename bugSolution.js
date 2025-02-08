```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
    $setOnInsert: { quantity: 0 },
    $inc: { quantity: 1 }
});
```