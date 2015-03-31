app.factory("Pages", ["WPRest", "$sce", function (WPRest, $sce) {
  //in a .factory() service object literal syntax is required
  var pageServant = {
    get : function(pageId) {
      var callUrl = pageId ? "/pages/"+pageId : "/pages";
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName : "gotPageData",
        callback : function(pageData) {
            pageData.forEach(function(page, i) {

            page.excerpt = $sce.trustAsHtml(page.excerpt);
            page.content = $sce.trustAsHtml(page.content);
  
          });

        return pageData;

        }
      });
    },
    post : function(data) {
      var callUrl = "/pages";
      WPRest.restCall(callUrl, "POST", data, "savedNewPage");
    },
    put : function(pageId, data) {
      var callUrl = "/pages/"+pageId;
      WPRest.restCall(callUrl, "PUT", data, "updatedPage");
    },
    delete : function(pageId) {
      var callUrl = "/pages/"+pageId;
      WPRest.restCall(callUrl, "DELETE", {}, "deletedPage");
    }
  };

  //.factory() services MUST return an object
  return pageServant;
}]);
           /* 
         
            var last = i === pageData.length-1;
            console.log("last", last);
           
           if (!pageId) {console.log("Här händer ngt") ; i++; return;
           });*/