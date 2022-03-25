const { Schema } = require("mongoose");
const { formatTimestamp } = require("../utils");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: formatTimestamp,
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
