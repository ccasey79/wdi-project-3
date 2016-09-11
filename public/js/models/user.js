angular 
  .module("wdi-project-3")
  .factory("User", User);

User.$inject = ["$resource"];
function User($resource) {

  var User = $resource("http://localhost:3000/api/user/:id", { id: '@_id' }, {
    update: { method: "PUT" },
    login: { method: "POST" + "/login" },
    register: { method: "POST" + "/register" }


  });

  return User;

}  