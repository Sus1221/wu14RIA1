app.factory("Pages", ["WPRest", "$sce", function (WPRest, $sce) {
  //in a .factory() service object literal syntax is required
  var pageServant = {
    get : function(pageId) {
      var callUrl = pageId ? "/pages/"+pageId : "/pages";
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName : "notImportant",
        callback : function(pageData) {
          for (var i = pageData.length - 1; i >= 0; i--) {
            if (!pageData[i].terms.pagetaxonomy) {
              pageData.splice(i, 1);
            }
          }

          var results = [];
          pageData.forEach(function(page, i) {

            page.excerpt = $sce.trustAsHtml(page.excerpt);
            page.content = $sce.trustAsHtml(page.content);
            
            var pageTag = page.terms.pagetaxonomy[0].slug;
            var mediaCallUrl = "/media?filter[pagetaxonomy]="+pageTag;
            WPRest.restCall(mediaCallUrl, "GET", {}, {
              broadcastName: "gotPageData",
              callback: function(mediaData) {
                results.push({
                  "media": mediaData,
                  "base_page": page
                });
                return results;
              }

            });
          });

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