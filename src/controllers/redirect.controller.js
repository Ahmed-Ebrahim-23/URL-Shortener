const Url = require('../models/url.model');
const redisClient = require('../config/redisConnection')

const redirect = async(req, res) => {
    key = req.params.key
    console.log(key)

    originalUrl = await redisClient.get(key)
    if(originalUrl)
        console.log("cache hit")
    else{
        originalUrl = await Url.findOne({key : key})
        originalUrl = originalUrl.longUrl 
        console.log(originalUrl)

        await redisClient.set(key, originalUrl, { EX: 3600 });
    }
    return res.redirect(originalUrl)
}

module.exports = {
    redirect
}