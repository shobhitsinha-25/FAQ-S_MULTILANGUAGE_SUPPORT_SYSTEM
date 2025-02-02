import redis from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient=redis.createClient({
    host:process.env.REDIS_HOST || 'localhost',
    port:process.env.REDIS_PORT || 6379,
})

redisClient.connect()
.then(()=>console.log("redis connected successfully"))
.catch((err)=>{console.log(err)});

export default redisClient;