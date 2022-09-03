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
        var mocked = new OriginalXMLHttpRequest(...args);
        mocked.onload = () => {
            console.log(res);
            var res = mocked.response;
            var ctype = mocked.getResponseHeader("content-type");
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
        return mocked;
    };

    window.XMLHttpRequest = MyXMLHttpRequest;
})();
