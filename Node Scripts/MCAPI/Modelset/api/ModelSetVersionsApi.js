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

var _BasicError = require('../model/BasicError');

var _BasicError2 = _interopRequireDefault(_BasicError);

var _ModelSetJob = require('../model/ModelSetJob');

var _ModelSetJob2 = _interopRequireDefault(_ModelSetJob);

var _ModelSetVersion = require('../model/ModelSetVersion');

var _ModelSetVersion2 = _interopRequireDefault(_ModelSetVersion);

var _ModelSetVersionSummaryCollection = require('../model/ModelSetVersionSummaryCollection');

var _ModelSetVersionSummaryCollection2 = _interopRequireDefault(_ModelSetVersionSummaryCollection);

var _ResourceError = require('../model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ModelSetVersions service.
* @module api/ModelSetVersionsApi
* @version 3.0.39
*/
var ModelSetVersionsApi = function () {

  /**
  * Constructs a new ModelSetVersionsApi. 
  * @alias module:api/ModelSetVersionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ModelSetVersionsApi(apiClient) {
    _classCallCheck(this, ModelSetVersionsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Create Model Set Version
   * @param {String} containerId The GUID that that uniquely identifies the Container.
   * @param {String} modelSetId The GUID that uniquely identifies the model set.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
   */


  _createClass(ModelSetVersionsApi, [{
    key: 'createModelSetVersionWithHttpInfo',
    value: function createModelSetVersionWithHttpInfo(containerId, modelSetId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createModelSetVersion");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling createModelSetVersion");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create Model Set Version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'createModelSetVersion',
    value: function createModelSetVersion(containerId, modelSetId) {
      return this.createModelSetVersionWithHttpInfo(containerId, modelSetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Disable Automatic Model Set Version Generation.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The target Model Set ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
    key: 'disableModelSetVersionsWithHttpInfo',
    value: function disableModelSetVersionsWithHttpInfo(containerId, modelSetId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling disableModelSetVersions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling disableModelSetVersions");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions:disable', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Disable Automatic Model Set Version Generation.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The target Model Set ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'disableModelSetVersions',
    value: function disableModelSetVersions(containerId, modelSetId) {
      return this.disableModelSetVersionsWithHttpInfo(containerId, modelSetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Enable Automatic Model Set Version Generation.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The target Model Set ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
    key: 'enableModelSetVersionsWithHttpInfo',
    value: function enableModelSetVersionsWithHttpInfo(containerId, modelSetId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling enableModelSetVersions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling enableModelSetVersions");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions:enable', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Enable Automatic Model Set Version Generation.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The target Model Set ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'enableModelSetVersions',
    value: function enableModelSetVersions(containerId, modelSetId) {
      return this.enableModelSetVersionsWithHttpInfo(containerId, modelSetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set Version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Number} version The number of the model set version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetVersion} and HTTP response
     */

  }, {
    key: 'getModelSetVersionWithHttpInfo',
    value: function getModelSetVersionWithHttpInfo(containerId, modelSetId, version) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetVersion");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetVersion");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling getModelSetVersion");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'version': version
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetVersion2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set Version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Number} version The number of the model set version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetVersion}
     */

  }, {
    key: 'getModelSetVersion',
    value: function getModelSetVersion(containerId, modelSetId, version) {
      return this.getModelSetVersionWithHttpInfo(containerId, modelSetId, version).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set Version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetVersion} and HTTP response
     */

  }, {
    key: 'getModelSetVersionLatestWithHttpInfo',
    value: function getModelSetVersionLatestWithHttpInfo(containerId, modelSetId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetVersionLatest");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetVersionLatest");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetVersion2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions/latest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set Version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetVersion}
     */

  }, {
    key: 'getModelSetVersionLatest',
    value: function getModelSetVersionLatest(containerId, modelSetId) {
      return this.getModelSetVersionLatestWithHttpInfo(containerId, modelSetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set Versions
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of model set versions to return in a page. If not specified the pageLimit is 50.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetVersionSummaryCollection} and HTTP response
     */

  }, {
    key: 'getModelSetVersionsWithHttpInfo',
    value: function getModelSetVersionsWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetVersions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetVersions");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {
        'pageLimit': opts['pageLimit'],
        'continuationToken': opts['continuationToken']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetVersionSummaryCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set Versions
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of model set versions to return in a page. If not specified the pageLimit is 50.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetVersionSummaryCollection}
     */

  }, {
    key: 'getModelSetVersions',
    value: function getModelSetVersions(containerId, modelSetId, opts) {
      return this.getModelSetVersionsWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ModelSetVersionsApi;
}();

exports.default = ModelSetVersionsApi;
//# sourceMappingURL=ModelSetVersionsApi.js.map