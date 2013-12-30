var is_ip_address = require('is-ip-address').validate,
    hostname_matcher = /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/;

module.exports = function (validator) {
    validator.validators.host = module.exports.validate;
};

module.exports.validate = function(string) {
  var matcher;
  
  if (string.match(/:/) !== null || string.match(/[a-zA-Z]/) === null) {
      // IP address
      return is_ip_address(string);
  }
  
  return hostname_matcher.test(string);
}
