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
      var text = res.slice(1, 200);

      console.log("# text");
      console.log(args);
      console.log(text);
    }
  };

  return mocked;
};

window.XMLHttpRequest = MyXMLHttpRequest;
