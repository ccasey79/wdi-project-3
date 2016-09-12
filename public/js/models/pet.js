angular
  .module("wdi-project-3")
  .factory("Pet", Pet);

Pet.$inject = ["$resource", "API_URL"];
function Pet($resource, API_URL) {

 return $resource(API_URL + "/pets/:id", { id: '@_id' }, {
   update: { method: "PUT" }
 });

}  