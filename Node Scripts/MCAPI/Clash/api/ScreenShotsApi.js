'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Clash Service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 3.3.12
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ResourceError = require('../model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

var _ScreenshotToken = require('../model/ScreenshotToken');

var _ScreenshotToken2 = _interopRequireDefault(_ScreenshotToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ScreenShots service.
* @module api/ScreenShotsApi
* @version 3.3.12
*/
var ScreenShotsApi = function () {

  /**
  * Constructs a new ScreenShotsApi. 
  * @alias module:api/ScreenShotsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScreenShotsApi(apiClient) {
    _classCallCheck(this, ScreenShotsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Add Screen Shot
   * @param {String} containerId Container ID.
   * @param {String} modelSetId Model Set ID.
   * @param {Object} opts Optional parameters
   * @param {File} opts.body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScreenshotToken} and HTTP response
   */


  _createClass(ScreenShotsApi, [{
    key: 'addScreenShotWithHttpInfo',
    value: function addScreenShotWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling addScreenShot");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling addScreenShot");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['image/png'];
      var accepts = ['application/json'];
      var returnType = _ScreenshotToken2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add Screen Shot
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set ID.
     * @param {Object} opts Optional parameters
     * @param {File} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScreenshotToken}
     */

  }, {
    key: 'addScreenShot',
    value: function addScreenShot(containerId, modelSetId, opts) {
      return this.addScreenShotWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Screen Shot
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set ID.
     * @param {String} screenShotId Screen shot ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: 'getScreenShotWithHttpInfo',
    value: function getScreenShotWithHttpInfo(containerId, modelSetId, screenShotId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getScreenShot");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getScreenShot");
      }

      // verify the required parameter 'screenShotId' is set
      if (screenShotId === undefined || screenShotId === null) {
        throw new Error("Missing the required parameter 'screenShotId' when calling getScreenShot");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'screenShotId': screenShotId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['image/png', 'application/json'];
      var returnType = File;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/screenshots/{screenShotId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Screen Shot
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set ID.
     * @param {String} screenShotId Screen shot ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: 'getScreenShot',
    value: function getScreenShot(containerId, modelSetId, screenShotId) {
      return this.getScreenShotWithHttpInfo(containerId, modelSetId, screenShotId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ScreenShotsApi;
}();

exports.default = ScreenShotsApi;
//# sourceMappingURL=ScreenShotsApi.js.map