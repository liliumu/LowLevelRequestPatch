// ==UserScript==
// @name         MyXMLHttpRequest
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
    var mocked_xhr = new OriginalXMLHttpRequest(...args);

    mocked_xhr.onload = () => {
      var res = mocked_xhr.response;
      var ctype = mocked_xhr.getResponseHeader("content-type");

      console.log(res);
      console.log(ctype);

      if (ctype.includes("json")) {
        var jsn = JSON.parse(res);
        console.log("# json");
        console.log(jsn);
      }

      if (ctype.includes("text/html")) {
        var text = res.slice(1, 200);
        console.log("# text");
        console.log(args);
        console.log(text);
      }
    };

    return mocked_xhr;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
})();
