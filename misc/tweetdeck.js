// TweetDeck 用
var OriginalXMLHttpRequest = window.XMLHttpRequest;

var MyXMLHttpRequest = function (...args) {
  var mocked = new OriginalXMLHttpRequest(...args);
  mocked.onloadend = () => {
    // xhr から json が流れてきたとき、コンソールに表示する
    var ctype = mocked.getResponseHeader("content-type");
    if (ctype.includes("json")) {
      console.log(JSON.parse(mocked.response));
    }
  };
  return mocked;
};

window.XMLHttpRequest = MyXMLHttpRequest;
