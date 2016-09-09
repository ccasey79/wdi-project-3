dbURIs = {
  test: "mongodb://localhost/project3-test",
  development: "mongodb://localhost/project3-test",
  production: process.env.MONGODB_URI || "mongodb://localhost/project3-test"
}

module.exports = function(env) {
  return dbURIs[env];
}