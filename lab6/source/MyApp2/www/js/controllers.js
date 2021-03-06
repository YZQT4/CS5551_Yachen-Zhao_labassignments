angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('mycntrl', function($scope, $http, $document) {

    $scope.findMovie = function () {
        var url="http://api.themoviedb.org/3/search/movie?api_key=62c648959dff042c455e5d6d7ed0413b&query="+($scope.mtitle)
//console.log($scope.mtitle);
        $http.get(url)
            .success(function (response) {
               // var demo= JSON.stringify(response);
              //  console.log(response);
                $scope.posterimg = response.results[0].poster_path;
                $scope.img = "https://image.tmdb.org/t/p/original"+($scope.posterimg);
                $scope.Title=response.results[0].title;
                $scope.Popularity=response.results[0].popularity;
                $scope.Releasedon=response.results[0].release_date;
                $scope.Liked=response.results[0].vote_count;
                $scope.Storyline=response.results[0].overview;

            });
    };

    $scope.findtags=function(){

        var url1="http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?apikey=49d42a08b29490c409f92d6389f3292afce91968&outputMode=json&text="+($scope.Storyline);
         $http.get(url1)
             .success(function(response2){
                 //  console.log(response2);
                  $scope.entities=response2.docSentiment.score;
             });

    }

})

.controller('foodsearch', function($scope, $http, $document) {

    $scope.findRes= function () {
        var url="https://api.foursquare.com/v2/venues/search?client_id=Q0ENF1YHFTNPJ31DCF13ALLENJW0P5MTH13T1SA0ZP1MUOCI&client_secret=ZH4CRZNEWBNTALAE3INIB5XG0QI12R4DT5HKAJLWKYE1LHOG&v=20160215&limit=5&near="+($scope.loca)+"&query="+($scope.food);
//console.log($scope.mtitle);
        $http.get(url)
            .success(function (response) {
               // var demo= JSON.stringify(response);
              //  console.log(response);
                $scope.name=response.results[0].name;
                $scope.contact=response.results[0].contact;
                $scope.location=response.results[0].location;
            });
    }

});
