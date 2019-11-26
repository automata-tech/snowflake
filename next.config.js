const { pathPrefix } = require('./config.js');

module.exports = {
  assetPrefix:  pathPrefix,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}
