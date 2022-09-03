MOCKED = false;

var Original = window.XMLHttpRequest;
var MyXMLHttpRequest = function (...args) {
  var mocked = new Original(...args);
  mocked.onload = () => {
    console.log(res);
    var res = mocked.response;
    var ctype = mocked.getResponseHeader("content-type");
    console.log(ctype);

    if (ctype.includes("json")) {
      MOCKED = mocked;
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
