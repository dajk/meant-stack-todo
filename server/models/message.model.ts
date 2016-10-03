import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const messageSchema = new Schema({
	title: String,
	isDone: Boolean
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
