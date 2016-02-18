/**
 * Created by anude on 2/17/2016.
 */

var registrationapp = angular.module("RegistrationApp",[]);

registrationapp.controller("studentController", function($scope,$window){
    $scope.logins = [];
    $scope.saveRegistrationData = function (first,last,email,user,pass,phone) {



        var Registration_details = localStorage.saveRegistrationdata?JSON.parse(localStorage.saveRegistrationdata):[];
        var Registration = JSON.stringify
        ({
            FirstName : first,
            LastName : last,
            EmailId : email,
            Password:pass,
            UserName: user,
            PhoneNumber: phone,

        });
        Registration_details.push(Registration);
        localStorage.setItem("Registration_details", JSON.stringify(Registration_details));

        //$scope.logins.push( localStorage.getItem("username") + " was logged in.");
        $window.location.href='success.html';
    };
});