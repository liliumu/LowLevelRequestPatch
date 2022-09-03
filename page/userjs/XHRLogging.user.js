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
      console.log(xhr);
      console.log("url  <-", xhr.responseURL);

      if (["text", ""].includes(xhr.responseType)) {
        var text = xhr.responseText;
        console.log("body <-", text.slice(0, 400).replace(/\s+/g, " "));
      } else if (xhr.responseType == "arraybuffer") {
        var buffer = xhr.response;
        var decoded = new TextDecoder().decode(buffer);
        console.log("buff <-", decoded.slice(0, 400).replace(/\s+/g, " "));
      } else {
        console.log("type <-", xhr.responseType);
      }
    }, 1000);

    return mocked;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
})();
