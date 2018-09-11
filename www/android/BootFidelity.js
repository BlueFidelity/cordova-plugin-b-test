var exec = require('cordova/exec');

module.exports = {
    isTestDevice: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'isTestDevice', []);
    },
    getIntent: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getIntent', []);
    },
    setHandleIntent: function (method) {
        exec(method, null, 'BootFidelity', 'setHandleIntent', [method]);
    },
    getNativePath: function (uri, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'BootFidelity', 'getNativePath', [uri]);
    }
};
