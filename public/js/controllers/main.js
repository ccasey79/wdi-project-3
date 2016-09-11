angular 
  .module("wdi-project-3")
  .controller("MainController", MainController);

MainController.$inject = ["User"];  
function MainController(User) {
  var self = this;

  this.all = User.query();

  this.new = {};
  this.selected = null;

  this.select = function select(User) {
    this.selected = User.get({ id: User._id });
  }
} 
