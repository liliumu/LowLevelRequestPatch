// ==UserScript==
// @name         MyXMLHttpRequest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://none/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  var OriginalXMLHttpRequest = window.XMLHttpRequest;

  var MyXMLHttpRequest = function (...args) {
    var mocked = new OriginalXMLHttpRequest(...args);

    mocked.onload = () => {
      var res = mocked.response;
      var ctype = mocked.getResponseHeader("content-type");

      console.log("# mocked.onload");
      console.log(ctype);
      console.log(res);

      if (ctype.includes("json")) {
        var jsn = JSON.parse(res);

        console.log("# json");
        console.log(jsn);
      }

      if (ctype.includes("text/html")) {
        var text = res.slice(0, 100);

        console.log("# text");
        console.log(args);
        console.log(text);
      }
    };

    return mocked;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
  // end code
})();
