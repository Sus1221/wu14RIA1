app.filter('type', function(){

		return function(properties, type) {
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

			for(var i = 0; i < properties.length; i++) {
				var p = properties[i];
				for(var j in type) {
					if(type[j] && j == p.facts.type_of_object) {
						propsThatGotThrough.push(p);
					}
				}
			}
		};
});