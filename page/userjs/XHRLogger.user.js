// ==UserScript==
// @name         XHRLogger.user.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  var OriginalXMLHttpRequest = window.XMLHttpRequest;

  var MyXMLHttpRequest = function (...args) {
    var mocked = new OriginalXMLHttpRequest(...args);

    setTimeout(function () {
      var xhr = mocked;
      window.xhr = xhr;
      console.log("");
      console.log(mocked);
      console.log("url  <-", xhr.responseURL);
      console.log("body <-", xhr.responseText.slice(0, 400).replace(/\s+/g, " "));
    }, 500);

    return mocked;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
})();
