const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
    key : {
        type: String,
        required: true
    },
    longUrl : {
        type: String,
        required: true
    }
},
{ 
    timestamps: true 
});

urlSchema.virtual("shortUrl").get(function(){
    return (process.env.API_URL+ "/" + this.key);
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;