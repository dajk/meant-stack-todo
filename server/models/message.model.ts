import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const messageSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: 'Title cannot be blank'
	},
	isDone: Boolean
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
