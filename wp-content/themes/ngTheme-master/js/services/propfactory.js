app.factory ('PropFactory', ["WPRest", "$sce", function(WPRest, $sce){

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

      WPRest.restCall(callUrl, "GET", {}, {
      	broadcastName: "notImportant",
      	callback: function(postData){

      		console.log("Vi har hittat poster: ", postData);

      		var searchResult = [];

      		var i = 0;
      		postData.forEach(function(post) {
      			//last visar om vi är på den sista i loopen
      			var last = i ===postData.length-1;

      			if (!post.terms.proptaxonomy) { return;}

      			post.excerpt = $sce.trustAsHtml(post.excerpt);
            	post.content = $sce.trustAsHtml(post.content);

            	
            	var propertyTag = post.terms.proptaxonomy[0].slug;
            	var mediaCallUrl = "/media?filter[proptaxonomy]="+propertyTag;

            	WPRest.restCall(mediaCallUrl, "GET", {}, {
            		//this broadcast is VERY important
	              broadcastName: last ? "foundProperty" : "notDone", 
	              callback: function(mediaData) {
	                //callback is triggered when we get data but 
	                //BEFORE we broadcast data throughout the app	 
	                //just log data
	                console.log("Property found property media: ", mediaData); 
	              }
	            });

            	i++;



      		});

      	}


      });

      console.log("Property find method will now call REST url: ", callUrl);

  	}

  };
 
 
  //and return our object

  return propertyServant;
}]);