// ==UserScript==
// @name         TwitterWeb.user.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  var OriginalXMLHttpRequest = window.XMLHttpRequest;
  var apiUrls = ["https://api.twitter.com/", "https://twitter.com/i/api/"];
  var skipUrls = [
    "https://api.twitter.com/1.1/live_pipeline/update_subscriptions",
    "https://twitter.com/i/api/1.1/promoted_content/log.json",
  ];

  var MyXMLHttpRequest = function (...args) {
    var mocked = new OriginalXMLHttpRequest(...args);

    setTimeout(function () {
      var xhr = mocked;
      var url = xhr.responseURL;
      // console.log("url <-", url);
      if (apiUrls.some((s) => url.startsWith(s))) {
        if (skipUrls.some((s) => url.startsWith(s))) {
          return;
        }
        var text = xhr.responseText;
        if (text) {
          console.log("");
          console.log("url <-", url);
          // console.log(JSON.parse(text));
          console.log(text.replace(/\s+/g, " ").slice(0, 800));
        }
      }
    }, 1000);

    return mocked;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
})();
