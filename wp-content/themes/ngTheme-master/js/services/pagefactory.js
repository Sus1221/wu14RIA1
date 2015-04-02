//factory that gets pages from DB
app.factory("Pages", ["WPRest", "$sce", function (WPRest, $sce) {

  var pageServant = {
    get : function(pageId) {
      //create URL to send in to .restCall
      var callUrl = pageId ? "/pages/"+pageId : "/pages";
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName : "notImportant",
        callback : function(pageData) {
          //loop through recieved data
          for (var i = pageData.length - 1; i >= 0; i--) {
            //if a objects doesn't have a pagetaxonomy
            if (!pageData[i].terms.pagetaxonomy) {
              //recieve that one from pageData
              pageData.splice(i, 1);
            }
          }

          var results = [];
          pageData.forEach(function(page, i) {
            //make pages exerpt and content into trustedHtml
            page.excerpt = $sce.trustAsHtml(page.excerpt);
            page.content = $sce.trustAsHtml(page.content);
            
            var pageTag = page.terms.pagetaxonomy[0].slug;
            //create an URL to get media and add the right pagetaxonomy value to it
            var mediaCallUrl = "/media?filter[pagetaxonomy]="+pageTag;
            //do .restCall and request media for the page
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

  return pageServant;
}]);
