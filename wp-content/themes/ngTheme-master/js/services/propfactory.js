app.factory ('PropFactory', [function(){
	var privateArray = ["basbsna", "adjsjhdashd","nasbdabsd"];

	var PropProduct = {
		Hello : function(name) {
			console.log ('Hello '+name)
		},
		surpriseMe : function() {
			var randIndex = Math.floor((Math.random() * privateArray.length-1));
			console.log ('I surpise you with: '+privateArray[0]);
		},
		some : false

		

	};



	return PropProduct;
}]);