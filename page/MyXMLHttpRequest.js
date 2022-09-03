var OriginalXMLHttpRequest = window.XMLHttpRequest;

var MyXMLHttpRequest = function (...args) {
  var mocked_xhr = new OriginalXMLHttpRequest(...args);

  mocked_xhr.onload = () => {
    var res = mocked_xhr.response;
    var ctype = mocked_xhr.getResponseHeader("content-type");

    console.log("# mocked_xhr.onload")
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

  return mocked_xhr;
};

window.XMLHttpRequest = MyXMLHttpRequest;
