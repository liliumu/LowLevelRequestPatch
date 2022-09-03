// ==UserScript==
// @name         XHRLog_TweetDeck
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tweetdeck.twitter.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
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
      // console.log('head <-', xhr.getAllResponseHeaders().replace(/\s+/g, " "))
      console.log(
        "body <-",
        xhr.responseText.replace(/\s+/g, " ").slice(0, 400)
      );
    }, 500);

    return mocked;
  };

  window.XMLHttpRequest = MyXMLHttpRequest;
})();
