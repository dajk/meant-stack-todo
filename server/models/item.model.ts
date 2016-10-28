import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title cannot be blank'
  },
  isDone: Boolean
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
