//filters by "from" and "to" price
app.filter('price', [function(){

	return function(properties, range) {
		//if no properties to filter - exit
		if(!properties) {
			return;
		}

		//array to fill with objects that got through this filter
		var propsThatGotThrough = [];

		//If neither from or to value is sent in, return all properties sent in
		if(range.length === 0) {
			return properties;
		}

		//loop through all properties
		for(var i = 0; i < properties.length; i++) {
			var p = properties[i];
			//divide by 1 to convert string into number
			var propPriceAsNo = p.facts.asking_price / 1;
		
			//if both "from" and "to" number is set,  check if propertyprice is between them
			if(range[0] && range[1] && propPriceAsNo >= range[0] && propPriceAsNo <= range[1]) {
				//push "through" filter
				propsThatGotThrough.push(p);
			//if "from"number is set, check if propertyPrice is larger than it
			}else if (range[0] && !range[1] && propPriceAsNo >= range[0]) {
				//push "through" filter
				propsThatGotThrough.push(p);
			//if "to"number is set, check if propertyPrice is smaller than it
			}else if (!range[0] && range[1] && propPriceAsNo <= range[1]) {
				//push "through" filter
				propsThatGotThrough.push(p);
			//if neither "from" or "to" is set
			}else if (!range[0] && !range[1]) {
				//push all properties through filter
				propsThatGotThrough.push(p);
			}
		}
		console.log("pricefilter log: ", propsThatGotThrough);
		//return array of properties that got through filter
		return propsThatGotThrough;
	};
}]);