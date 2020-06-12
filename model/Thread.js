const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  uidGG: {
    type: "String",
    ref: "User",
  },
  forumId: {
    type: "String",
    ref: "Forum",
  },
  title: {
    type: String,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  numberOfReplies: {
    type: Number,
    default: 0,
  },
  numberOfViews: {
    type: Number,
    default: 0,
  },
  lastUpdatedOn: {
    type: Number,
    default: new Date().getTime(),
  },
  //   editHistory: [{}], từ từ làm

  //---------------Mấy cái dưới này nên xóa::
  //   posts: {
  //     type: [
  //       {
  //         type: Schema.Types.ObjectId,
  //         ref: "Reply",
  //       },
  //     ],
  //     default: [],
  //   },
  //   userDisplayName: String,
  //   userAvatar: String,
});

module.exports = Thread = mongoose.model("thread", ThreadSchema);
