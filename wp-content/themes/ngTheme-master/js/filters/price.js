app.filter('price', [function(){

	return function(properties, range) {
		if(!properties) {
			return;
		}

		var propsThatGotThrough = [];

		if(range.length === 0) {
			return properties;
		}

		for(var i = 0; i < properties.length; i++) {
			var p = properties[i];
			propPriceAsNo = p.facts.asking_price / 1;
		
			if(range[0] && range[1] && propPriceAsNo >= range[0] && propPriceAsNo <= range[1]) {
				propsThatGotThrough.push(p);
			}else if (range[0] && !range[1] && propPriceAsNo >= range[0]) {
				propsThatGotThrough.push(p);
			}else if (!range[0] && range[1] && propPriceAsNo <= range[1]) {
				propsThatGotThrough.push(p);
			}else if (!range[0] && !range[1]) {
				propsThatGotThrough.push(p);
			}
		}
		console.log("pricefilter log: ", propsThatGotThrough);
		return propsThatGotThrough;
	};
}]);