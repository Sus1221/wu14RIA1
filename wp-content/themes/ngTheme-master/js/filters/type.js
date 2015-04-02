//Filter for sorting properties by type
app.filter('type', function(){

		return function(properties, type) {
			//if no properties, exit
			if(!properties) {
				return;
			}
			/*
			types = {
				Apartment: "",
				House: "",
				Farm: "",
				Plot: ""
			}
			*/
			//array to hold properties that got through the filter
			var propsThatGotThrough = [];

			//loop through all properties
			for(var i = 0; i < properties.length; i++) {
				var p = properties[i];
				//loop through all types asked for
				for(var j in type) {
					//for type that is asked for and items with that type
					if(type[j] && j == p.facts.type_of_object) {
						//push properties of right type to array
						propsThatGotThrough.push(p);
					}
				}
			}
		//return array of properties that got through filter
		return propsThatGotThrough;
		};
});