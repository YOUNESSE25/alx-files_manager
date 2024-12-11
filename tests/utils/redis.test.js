import redisClient from '../../utils/redis';
import { expect } from 'chai';

describe('+ RedisClient utility', () => {
  before(function (done) {
    this.timeout(10000);
    setTimeout(done, 4000);
  });

  it('+ Setting and getting a value', async function () {
    await redisClient.set('test_key', 345, 10);
    expect(await redisClient.get('test_key')).to.equal('345');
  });
  
  it('+ Client is alive', () => {
    expect(redisClient.isAlive()).to.equal(true);
  });
});
