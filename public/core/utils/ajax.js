let httpRequest;

if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();
} else if(window.ActiveXObject) {
  try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

module.exports = function({method, url, body}) {
  var promise = new Promise((resolve, reject) => {
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          resolve(JSON.parse(httpRequest.responseText));
        } else {
          reject();
        }
      }
    };
    
    httpRequest.open(method, url);
    httpRequest.send(body);
  });

  return promise;
};

