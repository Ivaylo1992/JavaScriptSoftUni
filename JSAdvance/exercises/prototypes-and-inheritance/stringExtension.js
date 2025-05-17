(function solve() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }

    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }

    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return !this.toString();
  };

  String.prototype.truncate = function (n) {
    if (n >= this.length) {
      return this.toString();
    }

    if (n < 4) {
      let result = "";
      for (let _ = 0; _ < n; _++) {
        result += ".";
      }

      return result;
    }

    const splitString = this.split(" ");

    if (splitString.length === 1) {
      const currentString = splitString[0];
      const result = currentString.slice(0, n - 3) + "...";

      return result;
    }

    let result = [];
    const neededLength = n - 3;

    for (el of splitString) {
      result.push(el);
      if (result.join(" ").length > neededLength) {
        result.pop();
        break;
      }
    }

    return result.join(" ") + "...";
  };

  String.format = function (string, ...params) {
    const result = [];

    const stringAsArray = string.split(" ");

    for (let el of stringAsArray) {
      if (el.startsWith("{")) {
        if (params.length) {
          el = params.shift();
        }
      }
      result.push(el);
    }

    return result.join(" ");
  };
} ())

let str = ''
console.log(str.isEmpty());

