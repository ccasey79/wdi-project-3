dbURIs = {
  test: "mongodb://localhost/project4-test",
  development: "mongodb://localhost/project4",
  production: process.env.MONGODB_URI || "mongodb://localhost/project4"
}

module.exports = function(env) {
  return dbURIs[env];
}