app.factory ('PropFactory', ["WPRest", "$sce", function(WPRest, $sce){
  var searchResult = [];
  //declare our object literal to return later
  var propertyServant = {
  	find : function(searchParams, pageNo, startOver){
      //if no searchParams, set it to empty object
  		searchParams = searchParams ? searchParams : {};
      //if no pageNo, set it to 1
      pageNo = pageNo ? pageNo : 1;
      //if startOver is true or pageNo = 1
      if (startOver || pageNo === 1) {
        //empty searchResult array
        searchResult.length = 0;
      }
  
      //build a REST callUrl from search params
      var callUrl = "/posts?page=" + pageNo + "&filter[category_name]=fastigheter";

      //loop through recieved searchParams - object
      for (var i in searchParams) {
        //searchParams object keys are filter keys, searchParams object values are filter values
        //if searchParams isn't an object
        if (searchParams[i].constructor.name != "Object") {
          //add key and value to callUrl
          callUrl += "&filter["+i+"]="+searchParams[i];
        //if seachParams is an object
        } else {
          //loop through keys at one level deeper
          for (var j in searchParams[i]) {
            //and add key and value to callUrl
            callUrl += "&filter["+i+"]["+j+"]="+searchParams[i][j];
          }
        }
      }
      
      console.log("callUrl: ", callUrl);
      //make a restCall sending in callUrl built above
      WPRest.restCall(callUrl, "GET", {}, {
        //broadCast not listened to anywhere
      	broadcastName: "notImportant",
      	callback: function(postData){
      		console.log("Vi har hittat poster: ", postData);
          //loop through recieved data
          for (var i = postData.length - 1; i >= 0; i--) {
            //if a post doesn't have proptaxonomy
            if (!postData[i].terms.proptaxonomy) {
              //remove it from postData
              postData.splice(i, 1);
            }
          }

          //loop through recieved data
      		postData.forEach(function(post, i) {
      			//last will become through only when we're looping through the last object in postData
      			var last = i === postData.length-1;
            console.log("Last ", last);
            //make the exerpt and content of every post trusted html (an angular.js function)
      			post.excerpt = $sce.trustAsHtml(post.excerpt);
            post.content = $sce.trustAsHtml(post.content);

            //value of a post's proptaxonomy-slug
          	var propertyTag = post.terms.proptaxonomy[0].slug;
            //build url to get media belonging to each post
          	var mediaCallUrl = "/media?filter[proptaxonomy]="+propertyTag;
            //gets true if we're at the media search for the last post in postData
            var lastInner = last;
            WPRest.restCall(mediaCallUrl, "GET", {}, {
            	//if media of all posts is found, broadcast "foundProperty"
              broadcastName: last ? "foundProperty" : "notDone",
              callback: function(mediaData) {
                console.log("Property found property media: ", mediaData);
                //push mediaData, raw WP-post and custom input-fields data to array
                searchResult.push({
                  "media": mediaData,
                  "base_post": post,
                  "facts": post.property_data
                });
                console.log("Last2 ", lastInner, i);
                //if we're done looping through posts
                if(lastInner){
                  console.log("Detta är vårat innehåll i searchResult: ", searchResult);
                  //return array with results
                  return searchResult;
                }
              }
            });
      		});
      	}
      });
      console.log("Property find method will now call REST url: ", callUrl);
  	}
  };
  //and return our object
  return propertyServant;
}]);