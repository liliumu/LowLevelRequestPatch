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

  var MyXMLHttpRequest = function (...args) {
    var mocked = new OriginalXMLHttpRequest(...args);

    setTimeout(function () {
      var xhr = mocked;
      // console.log("url <-", xhr.responseURL);
      if (apiUrls.some((s) => xhr.responseURL.startsWith(s))) {
        var text = xhr.responseText;
        if (text) {
          console.log("url <-", xhr.responseURL);
          console.log(JSON.parse(text));
          console.log(text.slice(0, 800).replace(/\s+/g, " "));
        }
      }
    }, 1000);

    return mocked;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
})();
