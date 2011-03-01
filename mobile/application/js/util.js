var Util = {};

/**
 * Allow binding of callback function for objects.
 * @ref http://stackoverflow.com/questions/183214/javascript-callback-scope
 * @usage Util.bind(this, this.callbackFunction);
 */
Util.bind = function(scope, fn) {
  return function () {
    fn.apply(scope, arguments);
  };
}

Util.log = function(log) {
  console.log(log);
}