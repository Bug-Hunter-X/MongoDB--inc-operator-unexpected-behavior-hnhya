# MongoDB $inc operator unexpected behavior
This repository demonstrates an uncommon error related to the MongoDB `$inc` operator.  The original code incorrectly uses `$inc` leading to an unexpected outcome. The solution provides the correct usage.

## Bug Description
The original code attempts to increment a document's quantity by 1 using the `$inc` operator within an `updateOne` operation. The issue lies in the handling of missing fields. If the quantity field does not exist, `$inc` won't create it; instead, it will silently fail to update.

## Solution
The solution addresses this by using the `$inc` operator within a conditional `$setOnInsert` to ensure that the quantity field is created if it's missing. If the field already exists, `$inc` works as expected, incrementing its value.