import dbClient from '../../utils/db';

describe('+ DBClient utility', () => {
  before(function (done) {
    this.timeout(10000);
    Promise.all([dbClient.usersCollection(), dbClient.filesCollection()])
      .then(([usersCollection, filesCollection]) => {
        Promise.all([usersCollection.deleteMany({}), filesCollection.deleteMany({})])
          .then(() => done())
          .catch((deleteErr) => done(deleteErr));
      }).catch((connectErr) => done(connectErr));
  });

  it('+ nb Files returns the correct value', async () => {
    expect(await dbClient.nbFiles()).to.equal(0);
  });

  it('+ nb Users returns the correct value', async () => {
    expect(await dbClient.nbUsers()).to.equal(0);
  });
});
