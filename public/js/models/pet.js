angular
  .module("wdi-project-3")
  .factory("Pet", Pet);

Pet.$inject = ["$resource"];
function Pet($resource) {

  var Pet = $resource("http://localhost:3000/api/pet/:id", { id: '@_id' }, {
    update: { method: "PUT" }
  });

  return Pet; 

}  