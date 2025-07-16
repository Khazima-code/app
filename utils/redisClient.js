import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://default:BgR9YsJxIvxA8ckCXKr0SHDSemqHwNv1@redis-14005.c325.us-east-1-4.ec2.redns.redis-cloud.com:14005"
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
