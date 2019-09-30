'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Container & Model Set Management API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This API is for creating and managing Containers and Model Sets. A Container in is first and foremost a data partition. This partition can be aligned with any external logical data partitioning e.g. an Account or Project. In this respect Containers are completely synonymous with the HQ BIM 360 Docs Container concept. Containers are used to organise (amongst other things) Model Sets.  A Model Set is defined as a set of BIM 360 Docs Folders along with an optional set of Folder Model Lineage Filters. Once created Model Set Versions will automatically be generated for enabled Model Sets. Model Set Versions are automatically created in the background in response to changes in the BIM 360 Docs CMS. The availability of new Model Set Versions will also result in further automated downstream processing of Model Set Versions e.g. clash testing. ### Async POST, PATCH, PUT and DELETE This is an asynchronous API with respect to endpoints which perform POST, PATCH, PUT or DELETE operations. These endpoints all follow a standard implementation patter whereby calls onto a POST, PATCH, PUT or DELETE /resource endpoint will all result in an HTTP 202 (Accepted) response which returns the ID of the job associated with the operation. These IDs can be used to poll the job endpoint associated with each resource collection to track the progress of the operation started by the associated POST, PATCH, PUT or DELETE operation. The following HTTP status conventions will be adopted by endpoints in this API unless otherwise stated. ### Bad Request HTTP 400 Bad Request will be used to indicate that the request is invalid due to bad input data received either in a path variable or request body. Unless otherwise stated a 400 response will be accompanied by a Resource Error model payload. ### Forbidden HTTP 403 Forbidden will be used that the caller does not have permission to access or perform an operation on the resource(s) associated with the request. Likewise if a caller is attempting to create a resource and they do not have permission to do so 403 Forbidden will be returned. ### Not Found HTTP 404 Not Found will be used to indicate that the resource the caller is attempting to access/manipulate does not exist.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 3.0.39
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
* @version 3.0.39
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