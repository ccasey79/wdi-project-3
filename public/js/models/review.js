angular
  .module("wdi-project-3")
  .factory("Review", Review);

Review.$inject = ["$resource", "API_URL"];
function Review($resource, API_URL) { 

  return $resource(API_URL + "/reviews/:id", { id: '@_id' }, {
   update: { method: "PUT" }
  });

}  