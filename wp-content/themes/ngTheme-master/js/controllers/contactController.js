app.controller('contactController', function ($scope, $http, $modalInstance) {
    $scope.result = 'hidden';
    $scope.alert = {};
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        console.log("form data",$scope.formData);
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : '/wu14RIA1/wp-content/themes/ngTheme-master/php/contact-form.php',
                data    : param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.alert.type = 'success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.alert.type = 'danger';
                }
                $scope.alert.msg = data.message;
                console.log($scope.alert);
            });
        } else {
            $scope.alert.type = 'warning';
            $scope.submitButtonDisabled = false;
            $scope.alert.msg = 'Failed :( Please fill out all the fields.';
        }
    };

    $scope.closeAlert = function() {
        if ($scope.alert.type == "success") {
            $modalInstance.close();
        }

        $scope.alert = {};
    };

    $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
    };
});

var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        return returnString.slice( 0, returnString.length - 1 );
  };