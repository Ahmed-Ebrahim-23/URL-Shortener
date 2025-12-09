const redis = require('redis')

const redisClient = redis.createClient({
  url: process.env.REDIS_URL
});


redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

redisClient.on('ready', () => {
    console.log('Connected to Redis');
});

redisClient.connect();

module.exports = redisClient;