'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Nucleus Model Set Index API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * BIM 360 Indexing Service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 1.2.0
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

var _IndexJob = require('../model/IndexJob');

var _IndexJob2 = _interopRequireDefault(_IndexJob);

var _IndexManifest = require('../model/IndexManifest');

var _IndexManifest2 = _interopRequireDefault(_IndexManifest);

var _IndexQuery = require('../model/IndexQuery');

var _IndexQuery2 = _interopRequireDefault(_IndexQuery);

var _IndexResource = require('../model/IndexResource');

var _IndexResource2 = _interopRequireDefault(_IndexResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Index service.
* @module api/IndexApi
* @version 1.2.0
*/
var IndexApi = function () {

  /**
  * Constructs a new IndexApi. 
  * @alias module:api/IndexApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IndexApi(apiClient) {
    _classCallCheck(this, IndexApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get model set index job
   * Get model set index job
   * @param {String} containerId Container Id
   * @param {String} modelSetId The model set.
   * @param {String} jobId Transaciton Id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IndexJob} and HTTP response
   */


  _createClass(IndexApi, [{
    key: 'getModelSetJobWithHttpInfo',
    value: function getModelSetJobWithHttpInfo(containerId, modelSetId, jobId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetJob");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetJob");
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getModelSetJob");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'jobId': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IndexJob2.default;

      return this.apiClient.callApi('/v1/containers/{containerId}/modelsets/{modelSetId}/jobs/{jobId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get model set index job
     * Get model set index job
     * @param {String} containerId Container Id
     * @param {String} modelSetId The model set.
     * @param {String} jobId Transaciton Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IndexJob}
     */

  }, {
    key: 'getModelSetJob',
    value: function getModelSetJob(containerId, modelSetId, jobId) {
      return this.getModelSetJobWithHttpInfo(containerId, modelSetId, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Query an index
     * Query model set version index
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @param {Object} opts Optional parameters
     * @param {module:model/IndexQuery} opts.indexQuery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IndexJob} and HTTP response
     */

  }, {
    key: 'queryModelSetVersionIndexWithHttpInfo',
    value: function queryModelSetVersionIndexWithHttpInfo(containerId, modelSetId, version, opts) {
      opts = opts || {};
      var postBody = opts['indexQuery'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling queryModelSetVersionIndex");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling queryModelSetVersionIndex");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling queryModelSetVersionIndex");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IndexJob2.default;

      return this.apiClient.callApi('/v1/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/indexes:query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Query an index
     * Query model set version index
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @param {Object} opts Optional parameters
     * @param {module:model/IndexQuery} opts.indexQuery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IndexJob}
     */

  }, {
    key: 'queryModelSetVersionIndex',
    value: function queryModelSetVersionIndex(containerId, modelSetId, version, opts) {
      return this.queryModelSetVersionIndexWithHttpInfo(containerId, modelSetId, version, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Query index fields
     * Query model set version index fields
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IndexResource} and HTTP response
     */

  }, {
    key: 'queryModelSetVersionIndexFieldsWithHttpInfo',
    value: function queryModelSetVersionIndexFieldsWithHttpInfo(containerId, modelSetId, version) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling queryModelSetVersionIndexFields");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling queryModelSetVersionIndexFields");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling queryModelSetVersionIndexFields");
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
      var returnType = _IndexResource2.default;

      return this.apiClient.callApi('/v1/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/fields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Query index fields
     * Query model set version index fields
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IndexResource}
     */

  }, {
    key: 'queryModelSetVersionIndexFields',
    value: function queryModelSetVersionIndexFields(containerId, modelSetId, version) {
      return this.queryModelSetVersionIndexFieldsWithHttpInfo(containerId, modelSetId, version).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Query index manifest
     * Query model set version index manifest
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IndexManifest} and HTTP response
     */

  }, {
    key: 'queryModelSetVersionIndexManifestWithHttpInfo',
    value: function queryModelSetVersionIndexManifestWithHttpInfo(containerId, modelSetId, version) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling queryModelSetVersionIndexManifest");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling queryModelSetVersionIndexManifest");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling queryModelSetVersionIndexManifest");
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
      var returnType = _IndexManifest2.default;

      return this.apiClient.callApi('/v1/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/manifest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Query index manifest
     * Query model set version index manifest
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IndexManifest}
     */

  }, {
    key: 'queryModelSetVersionIndexManifest',
    value: function queryModelSetVersionIndexManifest(containerId, modelSetId, version) {
      return this.queryModelSetVersionIndexManifestWithHttpInfo(containerId, modelSetId, version).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Query a model set version index using a view
     * Query model set version index using a pre-defined view
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @param {String} viewId The view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IndexJob} and HTTP response
     */

  }, {
    key: 'queryModelSetVersionIndexViewWithHttpInfo',
    value: function queryModelSetVersionIndexViewWithHttpInfo(containerId, modelSetId, version, viewId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling queryModelSetVersionIndexView");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling queryModelSetVersionIndexView");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling queryModelSetVersionIndexView");
      }

      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling queryModelSetVersionIndexView");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'version': version,
        'viewId': viewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IndexJob2.default;

      return this.apiClient.callApi('/v1/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views/{viewId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Query a model set version index using a view
     * Query model set version index using a pre-defined view
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set.
     * @param {Number} version The version.
     * @param {String} viewId The view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IndexJob}
     */

  }, {
    key: 'queryModelSetVersionIndexView',
    value: function queryModelSetVersionIndexView(containerId, modelSetId, version, viewId) {
      return this.queryModelSetVersionIndexViewWithHttpInfo(containerId, modelSetId, version, viewId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return IndexApi;
}();

exports.default = IndexApi;
//# sourceMappingURL=IndexApi.js.map