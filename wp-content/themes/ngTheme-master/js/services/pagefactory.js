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
          if (pageData.constructor.name == "Array") {
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
          } else {
            //make pages exerpt and content into trustedHtml
            pageData.excerpt = $sce.trustAsHtml(pageData.excerpt);
            pageData.content = $sce.trustAsHtml(pageData.content);
            
            var pageTag = pageData.terms.pagetaxonomy ?
              pageData.terms.pagetaxonomy[0].slug :
              "****----**********"; //complete nonsense :D
            //create an URL to get media and add the right pagetaxonomy value to it
            var mediaCallUrl = "/media?filter[pagetaxonomy]="+pageTag;
            //do .restCall and request media for the page
            WPRest.restCall(mediaCallUrl, "GET", {}, {
              broadcastName: "gotPageData",
              callback: function(mediaData) {
                results.push({
                  "media": mediaData,
                  "base_page": pageData
                });
                return results;
              }
            });
          }
        }
      });
    },
    findBySlug : function(slug) {
      if(!slug) {return;}
  
      //build a REST callUrl from search params
      var callUrl = "/pages?filter[name]=" + slug;

      WPRest.restCall(callUrl, "GET" , {}, {
        broadcastName: "notImportant",
        callback: function(data) {
          if (!data) { return data;}
          pageServant.get(data[0].ID);
        }
      });
    }
  };

  return pageServant;
}]);
