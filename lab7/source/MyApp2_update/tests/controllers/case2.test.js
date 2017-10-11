describe('foodsearch',function()
        {
    var scope;
    
    beforeEach(module('foodsearch'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('foodsearchCtrl',{$scope:scope});
    }));
    
    it('should have results',function()
      {
        scope.return={{name}}
       expect(scope.posterimg).toEqual('name');  
    });
    
});
