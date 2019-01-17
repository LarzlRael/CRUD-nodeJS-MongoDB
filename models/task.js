const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const taksSchema = new Schema({
    title:String,
    description:String,
    status: {
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('tasks',taksSchema);