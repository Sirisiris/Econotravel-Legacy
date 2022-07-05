import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    price:Number,
    duration:Number,
    img:String,
    accessability:String,
    tag1:String,
    tag2:String,
    tag3:String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;