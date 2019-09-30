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

var _ModelSetView = require('../model/ModelSetView');

var _ModelSetView2 = _interopRequireDefault(_ModelSetView);

var _ModelSetViewCollection = require('../model/ModelSetViewCollection');

var _ModelSetViewCollection2 = _interopRequireDefault(_ModelSetViewCollection);

var _ModelSetViewJob = require('../model/ModelSetViewJob');

var _ModelSetViewJob2 = _interopRequireDefault(_ModelSetViewJob);

var _ModelSetViewVersion = require('../model/ModelSetViewVersion');

var _ModelSetViewVersion2 = _interopRequireDefault(_ModelSetViewVersion);

var _ModelSetViewVersionCollection = require('../model/ModelSetViewVersionCollection');

var _ModelSetViewVersionCollection2 = _interopRequireDefault(_ModelSetViewVersionCollection);

var _NewModelSetView = require('../model/NewModelSetView');

var _NewModelSetView2 = _interopRequireDefault(_NewModelSetView);

var _ResourceError = require('../model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

var _SortDirection = require('../model/SortDirection');

var _SortDirection2 = _interopRequireDefault(_SortDirection);

var _UpdateModelSetView = require('../model/UpdateModelSetView');

var _UpdateModelSetView2 = _interopRequireDefault(_UpdateModelSetView);

var _ViewSortFields = require('../model/ViewSortFields');

var _ViewSortFields2 = _interopRequireDefault(_ViewSortFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ModelSetViews service.
* @module api/ModelSetViewsApi
* @version 3.0.39
*/
var ModelSetViewsApi = function () {

  /**
  * Constructs a new ModelSetViewsApi. 
  * @alias module:api/ModelSetViewsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ModelSetViewsApi(apiClient) {
    _classCallCheck(this, ModelSetViewsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Add model set view
   * Adds a view to a container. This view will be applied to newly created indexes
   * @param {String} containerId The container.
   * @param {String} modelSetId The model set Id.
   * @param {Object} opts Optional parameters
   * @param {module:model/NewModelSetView} opts.newModelSetView 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewJob} and HTTP response
   */


  _createClass(ModelSetViewsApi, [{
    key: 'createModelSetViewWithHttpInfo',
    value: function createModelSetViewWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['newModelSetView'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createModelSetView");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling createModelSetView");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelSetViewJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add model set view
     * Adds a view to a container. This view will be applied to newly created indexes
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewModelSetView} opts.newModelSetView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewJob}
     */

  }, {
    key: 'createModelSetView',
    value: function createModelSetView(containerId, modelSetId, opts) {
      return this.createModelSetViewWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a specific model set view
     * Delete a specific model set view
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {String} viewId The view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewJob} and HTTP response
     */

  }, {
    key: 'deleteModelSetViewWithHttpInfo',
    value: function deleteModelSetViewWithHttpInfo(containerId, modelSetId, viewId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling deleteModelSetView");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling deleteModelSetView");
      }

      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling deleteModelSetView");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'viewId': viewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetViewJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Delete a specific model set view
     * Delete a specific model set view
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {String} viewId The view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewJob}
     */

  }, {
    key: 'deleteModelSetView',
    value: function deleteModelSetView(containerId, modelSetId, viewId) {
      return this.deleteModelSetViewWithHttpInfo(containerId, modelSetId, viewId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get a specific model set view
     * Get a specific model set view
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {String} viewId The view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetView} and HTTP response
     */

  }, {
    key: 'getModelSetViewWithHttpInfo',
    value: function getModelSetViewWithHttpInfo(containerId, modelSetId, viewId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetView");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetView");
      }

      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling getModelSetView");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'viewId': viewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetView2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get a specific model set view
     * Get a specific model set view
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {String} viewId The view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetView}
     */

  }, {
    key: 'getModelSetView',
    value: function getModelSetView(containerId, modelSetId, viewId) {
      return this.getModelSetViewWithHttpInfo(containerId, modelSetId, viewId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set View Job.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that that uniquely identifies the Model Set.
     * @param {String} viewId The GUID that that uniquely identifies the Model Set View.
     * @param {String} jobId The ID that that uniquely identifies the Job.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewJob} and HTTP response
     */

  }, {
    key: 'getModelSetViewJobWithHttpInfo',
    value: function getModelSetViewJobWithHttpInfo(containerId, modelSetId, viewId, jobId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetViewJob");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetViewJob");
      }

      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling getModelSetViewJob");
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getModelSetViewJob");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'viewId': viewId,
        'jobId': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetViewJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}/jobs/{jobId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set View Job.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that that uniquely identifies the Model Set.
     * @param {String} viewId The GUID that that uniquely identifies the Model Set View.
     * @param {String} jobId The ID that that uniquely identifies the Job.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewJob}
     */

  }, {
    key: 'getModelSetViewJob',
    value: function getModelSetViewJob(containerId, modelSetId, viewId, jobId) {
      return this.getModelSetViewJobWithHttpInfo(containerId, modelSetId, viewId, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get view by model set version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Number} version The number of the model set version.
     * @param {String} viewId The GUID that uniquely identifies the model set view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewVersion} and HTTP response
     */

  }, {
    key: 'getModelSetViewVersionWithHttpInfo',
    value: function getModelSetViewVersionWithHttpInfo(containerId, modelSetId, version, viewId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetViewVersion");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetViewVersion");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling getModelSetViewVersion");
      }

      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling getModelSetViewVersion");
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
      var returnType = _ModelSetViewVersion2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views/{viewId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get view by model set version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Number} version The number of the model set version.
     * @param {String} viewId The GUID that uniquely identifies the model set view.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewVersion}
     */

  }, {
    key: 'getModelSetViewVersion',
    value: function getModelSetViewVersion(containerId, modelSetId, version, viewId) {
      return this.getModelSetViewVersionWithHttpInfo(containerId, modelSetId, version, viewId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get views for model set version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Number} version The number of the model set version.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of views in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewVersionCollection} and HTTP response
     */

  }, {
    key: 'getModelSetViewVersionsWithHttpInfo',
    value: function getModelSetViewVersionsWithHttpInfo(containerId, modelSetId, version, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetViewVersions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetViewVersions");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling getModelSetViewVersions");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'version': version
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
      var returnType = _ModelSetViewVersionCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/versions/{version}/views', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get views for model set version
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Number} version The number of the model set version.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of views in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewVersionCollection}
     */

  }, {
    key: 'getModelSetViewVersions',
    value: function getModelSetViewVersions(containerId, modelSetId, version, opts) {
      return this.getModelSetViewVersionsWithHttpInfo(containerId, modelSetId, version, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set Views
     * Page through defined index views
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of views in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @param {String} opts.createdBy Filter by Created by
     * @param {String} opts.modifiedBy Filter by modified by
     * @param {Date} opts.after Filter by created/modified after
     * @param {Date} opts.before Filter by created/modified before, default UTC now
     * @param {Boolean} opts.isPrivate Only return views belonging to this user
     * @param {Array.<module:model/ViewSortFields>} opts.sortBy Defines items to sort by
     * @param {module:model/SortDirection} opts.sortDirection Defines a sort direction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewCollection} and HTTP response
     */

  }, {
    key: 'getModelSetViewsWithHttpInfo',
    value: function getModelSetViewsWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetViews");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetViews");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {
        'pageLimit': opts['pageLimit'],
        'continuationToken': opts['continuationToken'],
        'createdBy': opts['createdBy'],
        'modifiedBy': opts['modifiedBy'],
        'after': opts['after'],
        'before': opts['before'],
        'isPrivate': opts['isPrivate'],
        'sortBy': this.apiClient.buildCollectionParam(opts['sortBy'], 'multi'),
        'sortDirection': opts['sortDirection']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetViewCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set Views
     * Page through defined index views
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of views in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @param {String} opts.createdBy Filter by Created by
     * @param {String} opts.modifiedBy Filter by modified by
     * @param {Date} opts.after Filter by created/modified after
     * @param {Date} opts.before Filter by created/modified before, default UTC now
     * @param {Boolean} opts.isPrivate Only return views belonging to this user
     * @param {Array.<module:model/ViewSortFields>} opts.sortBy Defines items to sort by
     * @param {module:model/SortDirection} opts.sortDirection Defines a sort direction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewCollection}
     */

  }, {
    key: 'getModelSetViews',
    value: function getModelSetViews(containerId, modelSetId, opts) {
      return this.getModelSetViewsWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Search model set views by lineage composition
     * Search model set views by lineage composition. To match exactly pass exact&#x3D;true
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.exact Exactly match the set of lineages passed, default false.
     * @param {Number} opts.pageLimit The maximum number of views in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewCollection} and HTTP response
     */

  }, {
    key: 'searchModelSetViewLineagesWithHttpInfo',
    value: function searchModelSetViewLineagesWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling searchModelSetViewLineages");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling searchModelSetViewLineages");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {
        'exact': opts['exact'],
        'pageLimit': opts['pageLimit'],
        'continuationToken': opts['continuationToken']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelSetViewCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views:lineages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Search model set views by lineage composition
     * Search model set views by lineage composition. To match exactly pass exact&#x3D;true
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.exact Exactly match the set of lineages passed, default false.
     * @param {Number} opts.pageLimit The maximum number of views in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewCollection}
     */

  }, {
    key: 'searchModelSetViewLineages',
    value: function searchModelSetViewLineages(containerId, modelSetId, opts) {
      return this.searchModelSetViewLineagesWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a specific model set view
     * Update a specific model set view. The behaviour of this endpoint is as follows: * If oldName and newName is supplied, the name will be updated (both must be supplied, the name cannot be null) * If oldDescription or newDescription is supplied, the description will be updated (one can be null or omitted, description can be set to null) * If oldIsPrivate and newIsPrivate is supplied, the privacy of the view will be updated (both must be supplied) * If oldDocumentLineageUrns and newDocumentLineageUrns are supplied, the document lineage URNs will be updated (both must be non-null and non-empty arrays) * If oldScreenshotId or newScreenshotId are supplied, the screenshot will be updated (one can be null or omitted, screenshotId can be set to null)  If no property changes are supplied, an error is returned.
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {String} viewId The view.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateModelSetView} opts.updateModelSetView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetViewJob} and HTTP response
     */

  }, {
    key: 'updateModelSetViewWithHttpInfo',
    value: function updateModelSetViewWithHttpInfo(containerId, modelSetId, viewId, opts) {
      opts = opts || {};
      var postBody = opts['updateModelSetView'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling updateModelSetView");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling updateModelSetView");
      }

      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling updateModelSetView");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId,
        'viewId': viewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelSetViewJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/views/{viewId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update a specific model set view
     * Update a specific model set view. The behaviour of this endpoint is as follows: * If oldName and newName is supplied, the name will be updated (both must be supplied, the name cannot be null) * If oldDescription or newDescription is supplied, the description will be updated (one can be null or omitted, description can be set to null) * If oldIsPrivate and newIsPrivate is supplied, the privacy of the view will be updated (both must be supplied) * If oldDocumentLineageUrns and newDocumentLineageUrns are supplied, the document lineage URNs will be updated (both must be non-null and non-empty arrays) * If oldScreenshotId or newScreenshotId are supplied, the screenshot will be updated (one can be null or omitted, screenshotId can be set to null)  If no property changes are supplied, an error is returned.
     * @param {String} containerId The container.
     * @param {String} modelSetId The model set Id.
     * @param {String} viewId The view.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateModelSetView} opts.updateModelSetView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetViewJob}
     */

  }, {
    key: 'updateModelSetView',
    value: function updateModelSetView(containerId, modelSetId, viewId, opts) {
      return this.updateModelSetViewWithHttpInfo(containerId, modelSetId, viewId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ModelSetViewsApi;
}();

exports.default = ModelSetViewsApi;
//# sourceMappingURL=ModelSetViewsApi.js.map