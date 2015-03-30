app.factory("Menus", ["WPRest", "SITE_INFO", function(WPRest, SITE_INFO) {

  function crtMnuTree (menuLinks) {

  	console.log("- -- MenuLinks: ", menuLinks);

			// Empty array for menu tree

		  var menuTree = []; 

		  // sort by weight
		    menuLinks.sort(function(x,y){
		      return x.order > y.order;
		    });

		  // Empty object for hashmap

		  var hashMap = {};

		  // loop through menuLinks and ...

		  for (i = 0; i < menuLinks.length; i++) {

		  	// Remove site root from link urls
		  	menuLinks[i].url = menuLinks[i].url.replace(SITE_INFO.http_root, "");

		  	// Give each menuLinks object a new property - children

		    menuLinks[i].children = [];

		    // Add ** all ** objects to hash, with "_" and value of mlid
		    // property as object 'name'

		    hashMap["_"+menuLinks[i].ID] = menuLinks[i];
		    
		    // if the object does not have a parent-link ID, 
		    // ** assume top-level link and push it to menuTree. **

		    if (!menuLinks[i].parent){
		    menuTree.push(menuLinks[i]); 
		    }

			};

		  // add children to all menu_items ** using the hash reference **
		  // -- The hash reference The hash reference The HASH Reference !! --

		  for(var i in hashMap){
		    var item = hashMap[i];
		    
		    //if no parent - plid, skip this iteration of the loop
		    if(!item.parent){continue;}

		    // add ** all ** others to menuTree ** using the hash reference **
		    hashMap["_"+item.parent].children.push(item);
		  }; 

  		// sort links by children.lenght (high to low)
			// (menu order by	depth. In the DOM - deepest to the left

			menuTree.sort(function(x,y){
			return x.children.length < y.children.length;

		}); 

			console.log("- -- menuTree: ", menuTree);
	return menuTree;
	};

	function prepareMenu(menuObj) {
  	console.log ("- -- prepareMenu, menuObj: ", menuObj);
    menuObj.items = crtMnuTree(menuObj.items);

    return menuObj;
  }

  // THE factory object
	var menuServant = {
    get : function(menuId) {
      var callUrl = menuId ? "/menus/" + menuId : "/menus";

      var broadcastInstructions = menuId ?
        //only use callback function if we are asking to a specific menu
        //using a menuId
        {
          broadcastName : "gotMenuLinks",
          callback: prepareMenu
        } :
        //else only provide the broadcast name
        "gotMenus";
        
      WPRest.restCall(callUrl, "GET", {}, broadcastInstructions);
    }
  };

  return menuServant;

}]);