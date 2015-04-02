//handling data from contactform
app.controller('contactController', function ($scope, $http, $modalInstance) {
    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    //When form i submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        console.log("form data",$scope.formData);
        //if contactform is valid
        if (contactform.$valid) {
            //send http-request
            $http({
                method  : 'POST',
                url     : '/wu14RIA1/wp-content/themes/ngTheme-master/php/contact-form.php',
                data    : param($scope.formData),
            }).success(function(data){
                // console.log(data);
                 //success comes from the return json object
                if (data.success) {
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
                //close modal
                $modalInstance.close();
            });
        //if contactform isn't valid
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    };

    //closing the modal
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
