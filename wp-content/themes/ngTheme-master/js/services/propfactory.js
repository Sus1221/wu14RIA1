app.factory ('PropFactory', [function(){
	var privateArray = ["Boom", "Woof","Subwoof", "in a fashion", "SELLFORCE EVERYTHING"];

	var PropProduct = {
		Hello : function(name) {
			console.log ('Hello '+name)
		},
		surpriseMe : function() {
			var randIndex = Math.floor((Math.random() * privateArray.length));
			console.log ('I surpise you, '+privateArray[randIndex]+'!');
		},
		some : false

		

	};



	return PropProduct;
}]);