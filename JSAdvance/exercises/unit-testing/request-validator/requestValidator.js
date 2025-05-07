function requestValidator (requestObj) {
  const isValidURI = function (uri) {
    const path = /^(?:[a-zA-Z0-9.]+|\*)$/g;

    return path.test(uri) || uri === "*";
  };

  const isValidMessage = function (message) {
    const path = /^[^<>\&'\"\\]*$/g;

    return path.test(message) || message == '';
  };

  const isValidVersion = function (version) {
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    return validVersions.includes(version);
  };

  const isValidMethod = function (method) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    return validMethods.includes(method);
  };

  const errorMessage = function (propertyName) {
    return `Invalid request header: Invalid ${propertyName}`
  };


  if (requestObj.method === undefined || !isValidMethod(requestObj.method)) {
    const prop = 'Method';
    const message =  errorMessage(prop);
    throw new Error(message)
  }

  if (requestObj.uri === undefined || !isValidURI(requestObj.uri)) {
    const prop = 'URI';
    const message =  errorMessage(prop);
    throw new Error(message)
  }

  if (requestObj.version === undefined  || !isValidVersion(requestObj.version)) {
    const prop = 'Version';
    const message =  errorMessage(prop);
    throw new Error(message)
  }

  if (requestObj.message === undefined || !isValidMessage(requestObj.message)) {
    const prop = 'Message';
    const message =  errorMessage(prop);
    throw new Error(message)
  }
  

  return requestObj;
};