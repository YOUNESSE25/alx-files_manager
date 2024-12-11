import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(request, response) {
    const redis = redisClient.isAlive();
    const db = dbClient.isAlive();
    response.status(200).send({ redis, db });
  }

  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers();
    const filesNum = await dbClient.nbFiles();
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController;
