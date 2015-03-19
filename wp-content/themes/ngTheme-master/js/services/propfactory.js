app.factory ('PropFactory', ["WPRest", function(WPRest){

	//WPRest.restCall("/", "GET", {}, "WPRestWorks");
	 //factory code will go here...
  //declare our object literal to return already now
  var propertyServant = {
  	find : function(searchParams){
  		searchParams = searchParams ? searchParams : {};

  	//Söker efter posts med kategorin "fastigheter"	
  		var callUrl = "/posts?filter[category_name]=fastigheter";

  	//build a REST callUrl from search params, 
     /* for (var i in searchParams) {
        searchParams object keys are filter keys, 
        searchParams object values are filter values
        callUrl += "&filter["+i+"]="+searchParams[i];
      }
      */

      WPRest.restCall(callUrl, "GET", {}, "Banan");

      console.log("Property find method will now call REST url: ", callUrl);

  	}

  };
 
 
  //and return our object
  return propertyServant;
}]);