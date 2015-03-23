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

      		
      		postData.forEach(function(post, i) {console.log(i, post, postData.length)
      			//last visar om vi är på den sista i loopen
      			var last = i ===postData.length-1;
            console.log("Last ", last);

      			if (!post.terms.proptaxonomy) {console.log("Kicking da early return!") ;return;}

      			post.excerpt = $sce.trustAsHtml(post.excerpt);
            post.content = $sce.trustAsHtml(post.content);

            	
          	var propertyTag = post.terms.proptaxonomy[0].slug;
          	var mediaCallUrl = "/media?filter[proptaxonomy]="+propertyTag;

            (function(){
              var lastInner = last, innerI = i;
            	WPRest.restCall(mediaCallUrl, "GET", {}, {
            		//this broadcast is VERY important
                broadcastName: last ? "foundProperty" : "notDone", 
                callback: function(mediaData) {
                  //callback is triggered when we get data but 
                  //BEFORE we broadcast data throughout the app	 
                  //just log data
                  console.log("Property found property media: ", mediaData); 

                  searchResult.push({
                    "media": mediaData,
                    "base_post": post,
                    "facts": post.property_data
                  });
                  console.log("Last2 ", lastInner, i);
                  if(lastInner){
                    console.log("Detta är vårat innehåll i searchResult: ", searchResult);
                    return searchResult;

                  }
                }
              });
            })();

          	



      		});

      	}


      });

      console.log("Property find method will now call REST url: ", callUrl);

  	}

  };
 
 
  //and return our object

  return propertyServant;
}]);