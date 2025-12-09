const Url = require('../models/url.model');
const Counter = require("../models/counter.model")
const Base62 = require('../Utils/base62');

const getAllUrls = async (req, res) => {
    urls = await Url.find({});
    return res.json(urls);
};

const getUrl = (req, res) => {
    console.log(req.body());
    url = Url.where({key: key});
    return res.json(url)
};

const createUrl = async (req, res) => {
     const { longUrl } = req.body;

    let url = await Url.findOne({longUrl : longUrl});
    if (url)
        return res.json({
            shortUrl : url.shortUrl
        });

    const counter = await Counter.findByIdAndUpdate(
      { _id: "url_counter" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    key = Base62.encode(BigInt(counter.seq));

    url = await Url.create({
        longUrl : longUrl,
        key : key
    });
    
    return res.json({
        shortUrl : url.shortUrl
    });
};

const deleteUrl = (req, res) => {

};

module.exports = {
    getAllUrls,
    getUrl,
    createUrl,
    deleteUrl
}