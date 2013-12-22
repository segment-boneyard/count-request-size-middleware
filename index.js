
var defaults = require('defaults');

/**
 * Expose `generate`.
 */

module.exports = generate;

/**
 * Generate a count request size middleware.
 *
 * @param {Object} options
 *   @param {String} key
 * @return {Function}
 */

function generate (options) {

  options = defaults(options, { key: '_received' });
  var key = options.key;

  return function countRequestSize (req, res, next) {
    if (req[key]) return next();
    req[key] = 0;

    function onData (chunk) {
      req[key] += chunk.length;
    }

    function cleanup () {
      req.removeListener('data', onData);
      req.removeListener('end', cleanup);
      req.removeListener('error', cleanup);
      req.removeListener('close', cleanup);
    }

    req.on('data', onData);
    req.once('end', cleanup);
    req.once('error', cleanup);
    req.once('close', cleanup);

    next();
  };
}