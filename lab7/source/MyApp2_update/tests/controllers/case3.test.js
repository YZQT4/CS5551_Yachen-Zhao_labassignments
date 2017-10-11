describe('findMovie',function()
        {
    var scope;
    
    beforeEach(module('findMovie'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('findMovieCtrl',{$scope:scope});
    }));
    
    it('should have results, if not should have return',function()
      {
       expect(scope.posterimg).toEqual('moviedecription');  
    });
    
});
