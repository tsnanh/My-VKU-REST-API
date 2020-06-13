const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  uid: {
    type: String,
    ref: "User",
  },
  idThread: {
    type: String,
    ref: "Thread",
  },
  idForum: {
    type: String,
    ref: "Forum",
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  quoted: {
    type: Schema.Types.ObjectId,
  },
  quotedReply: this,
  //   editHistory: [{
  // }], từ từ làm

  //---------------Mấy cái dưới này nên xóa::
  // userDisplayName: String,
  // userAvatar: String,
  // images: [String],
  // threadTitle: String,
});

module.exports = Reply = mongoose.model("reply", ReplySchema);