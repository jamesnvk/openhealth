app.controller('HomeController', function(ProviderService, $location){
  var ctrl = this
  var url = 'http://localhost:3000/api/v1/providers'

  this.showHome = function(){
    return $location.path() === '/'
  } 

  this.search = function(){
    ProviderService.getProviders().success(function(data){
      ctrl.providers = data
    })
  }

  this.editProvider = function(id){
    //find specific provider id to edit
    var lookup = {}
      for (var i = 0, len = this.providers.length; i < len; i++) {
        lookup[this.providers[i].id] = this.providers[i];
      } 
    var provider = lookup[id]
    ProviderService.updateProvider(provider)
  }

  this.checkLocation = function(data){
    if (/[^a-zA-Z0-9]/.test(data)){
      return "Location must be alphanumeric"
    }
  }
})