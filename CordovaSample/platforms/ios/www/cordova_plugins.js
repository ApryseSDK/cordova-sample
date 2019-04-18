cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "pdftron-cordova.PDFTron",
      "file": "plugins/pdftron-cordova/www/PDFTron.js",
      "pluginId": "pdftron-cordova",
      "clobbers": [
        "PDFTron"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "pdftron-cordova": "1.0.0"
  };
});