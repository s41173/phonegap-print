cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-bluetooth-printer/www/BluetoothPrinter.js",
        "id": "cordova-plugin-bluetooth-printer.BluetoothPrinter",
        "pluginId": "cordova-plugin-bluetooth-printer",
        "clobbers": [
            "BTPrinter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-bluetooth-printer": "0.0.2-dev"
}
// BOTTOM OF METADATA
});