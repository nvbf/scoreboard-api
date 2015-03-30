if (!process.env.mongoUri) {
  throw new Error('No environment variable called "mongoUri".')
}

module.exports = {
  db: {
    name: "db",
    connector: "loopback-connector-mongodb",
    url: process.env.mongoUri
  }
};
