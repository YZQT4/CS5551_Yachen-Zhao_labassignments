/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){
    $scope.insertData = function(){
        console.log($scope.formData.lname);
        console.log($scope.formData.fname);
        console.log($scope.formData.email);
        console.log($scope.formData.password);
        console.log($scope.formData.cpassword);
        var dataParams = {
            'fname' : $scope.fname,
            'lname' : $scope.lname,
            'email' : $scope.email,
            'pw' : $scope.pw
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
});
myapp.controller('View1Ctrl', function ($scope, $http) {
    $scope.venueList = new Array();
    $scope.mostRecentReview;
    $scope.getVenues = function () {
        var placeEntered = document.getElementById("txt_placeName").value;
        var searchQuery = document.getElementById("txt_searchFilter").value;
        if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
            document.getElementById('div_ReviewList').style.display = 'none';
            //This is the API that gives the list of venues based on the place and search query.
            var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                "?client_id=Q0ENF1YHFTNPJ31DCF13ALLENJW0P5MTH13T1SA0ZP1MUOCI" +
                "&client_secret=ZH4CRZNEWBNTALAE3INIB5XG0QI12R4DT5HKAJLWKYE1LHOG" +
                "&v=20160215&limit=5" +
                "&near=" + placeEntered +
                "&query=" + searchQuery);
            handler.success(function (data) {

                if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                    for (var i = 0; i < data.response.venues.length; i++) {
                        $scope.venueList[i] = {
                            "name": data.response.venues[i].name,
                            "id": data.response.venues[i].id,
                            "location": data.response.venues[i].location
                        };
                    }
                }

            })
            handler.error(function (data) {
                alert("There was some error processing your request. Please try after some time.");
            });
        }
    };
});