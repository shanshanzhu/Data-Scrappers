
var phantom = require('phantom');

var phantomScrape = function(urls){
  var i = 0;
  phantom.create(function(ph) {
     ph.createPage(function(page) {
      openPageGetUrl(page, urls[i]);
      var intervalID = setInterval(function() {
        if (urlLeft === 0) {
          i += 1;
          if (i < urls.length) { openPageGetUrl(page, urls[i]); }
        }
        if (i === urls.length) {
          ph.exit();
          clearInterval(intervalID);
        }
      }, 100);
    });
  });
};

var openPageGetUrl = function(page, url){
  page.open(url, function(status) {
    console.log("opening webpage", url, status);
    page.render('./screenshot/temp.jpg',function() { //the first variable saves an screenshot to the file specified.
      extractDBUrl();
    });
  });
};
