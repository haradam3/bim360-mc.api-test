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

var _Container = require('../model/Container');

var _Container2 = _interopRequireDefault(_Container);

var _ContainerJob = require('../model/ContainerJob');

var _ContainerJob2 = _interopRequireDefault(_ContainerJob);

var _ContainerRegion = require('../model/ContainerRegion');

var _ContainerRegion2 = _interopRequireDefault(_ContainerRegion);

var _ModelSetJob = require('../model/ModelSetJob');

var _ModelSetJob2 = _interopRequireDefault(_ModelSetJob);

var _ModelSetSummaryCollection = require('../model/ModelSetSummaryCollection');

var _ModelSetSummaryCollection2 = _interopRequireDefault(_ModelSetSummaryCollection);

var _NewContainer = require('../model/NewContainer');

var _NewContainer2 = _interopRequireDefault(_NewContainer);

var _NewModelSet = require('../model/NewModelSet');

var _NewModelSet2 = _interopRequireDefault(_NewModelSet);

var _ResourceError = require('../model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Containers service.
* @module api/ContainersApi
* @version 3.0.39
*/
var ContainersApi = function () {

  /**
  * Constructs a new ContainersApi. 
  * @alias module:api/ContainersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContainersApi(apiClient) {
    _classCallCheck(this, ContainersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Create Container
   * When creating a Container via this endpoint a Container ID can be optionally specified in advance in the request body. If supplied this value must be globally unique. An optional context can also be supplied for the Container. This context can be used by external service domains to establish a relationship between the Container and an external data owned by the external service domain. For BIM 360 Projects it is assumed that Account and Project ID will be supplied as context values when creating a Container. This convention will allow containers to be linked to their associated BIM 360 Accounts and Projects. The context is specified as a set of key value pairs which are stored against the Container. Callers to this endpoint will be redirected to the Containers job endpoint.
   * @param {module:model/ContainerRegion} xAdsRegion The region to create the container in.
   * @param {Object} opts Optional parameters
   * @param {module:model/NewContainer} opts.newContainer 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContainerJob} and HTTP response
   */


  _createClass(ContainersApi, [{
    key: 'createContainerWithHttpInfo',
    value: function createContainerWithHttpInfo(xAdsRegion, opts) {
      opts = opts || {};
      var postBody = opts['newContainer'];

      // verify the required parameter 'xAdsRegion' is set
      if (xAdsRegion === undefined || xAdsRegion === null) {
        throw new Error("Missing the required parameter 'xAdsRegion' when calling createContainer");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'x-ads-region': xAdsRegion
      };
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContainerJob2.default;

      return this.apiClient.callApi('/v3/containers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create Container
     * When creating a Container via this endpoint a Container ID can be optionally specified in advance in the request body. If supplied this value must be globally unique. An optional context can also be supplied for the Container. This context can be used by external service domains to establish a relationship between the Container and an external data owned by the external service domain. For BIM 360 Projects it is assumed that Account and Project ID will be supplied as context values when creating a Container. This convention will allow containers to be linked to their associated BIM 360 Accounts and Projects. The context is specified as a set of key value pairs which are stored against the Container. Callers to this endpoint will be redirected to the Containers job endpoint.
     * @param {module:model/ContainerRegion} xAdsRegion The region to create the container in.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewContainer} opts.newContainer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContainerJob}
     */

  }, {
    key: 'createContainer',
    value: function createContainer(xAdsRegion, opts) {
      return this.createContainerWithHttpInfo(xAdsRegion, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Model Set.
     * Create a Model Set within a given Container specifying the Folder(s) and optional Document Folder Filter(s) which will be used to determine the set of Model Document lineages comprising the Model Set. Null or empty Document Folder Filter arrays are equivalent to *.* for the model formats supported by the platform.
     * @param {String} containerId The Container GUID of the Container in which the Model Set will be created.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewModelSet} opts.newModelSet Create Model Set request body parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
    key: 'createModelSetWithHttpInfo',
    value: function createModelSetWithHttpInfo(containerId, opts) {
      opts = opts || {};
      var postBody = opts['newModelSet'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling createModelSet");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create Model Set.
     * Create a Model Set within a given Container specifying the Folder(s) and optional Document Folder Filter(s) which will be used to determine the set of Model Document lineages comprising the Model Set. Null or empty Document Folder Filter arrays are equivalent to *.* for the model formats supported by the platform.
     * @param {String} containerId The Container GUID of the Container in which the Model Set will be created.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewModelSet} opts.newModelSet Create Model Set request body parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'createModelSet',
    value: function createModelSet(containerId, opts) {
      return this.createModelSetWithHttpInfo(containerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Container
     * @param {String} containerId The Container Guid.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContainerJob} and HTTP response
     */

  }, {
    key: 'deleteContainerWithHttpInfo',
    value: function deleteContainerWithHttpInfo(containerId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling deleteContainer");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContainerJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Delete Container
     * @param {String} containerId The Container Guid.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContainerJob}
     */

  }, {
    key: 'deleteContainer',
    value: function deleteContainer(containerId) {
      return this.deleteContainerWithHttpInfo(containerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Container
     * @param {String} containerId The Container GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Container} and HTTP response
     */

  }, {
    key: 'getContainerWithHttpInfo',
    value: function getContainerWithHttpInfo(containerId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainer");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Container2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Container
     * @param {String} containerId The Container GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Container}
     */

  }, {
    key: 'getContainer',
    value: function getContainer(containerId) {
      return this.getContainerWithHttpInfo(containerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Container Job
     * All POST, PUT, PATCH and DELETE calls to the containers resource will result in a job. This endpoint can be used to track the progress of these jobs.
     * @param {module:model/ContainerRegion} xAdsRegion The region the container resides in.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} jobId The GUID that that uniquely identifies the Job.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContainerJob} and HTTP response
     */

  }, {
    key: 'getContainerJobByContainerWithHttpInfo',
    value: function getContainerJobByContainerWithHttpInfo(xAdsRegion, containerId, jobId) {
      var postBody = null;

      // verify the required parameter 'xAdsRegion' is set
      if (xAdsRegion === undefined || xAdsRegion === null) {
        throw new Error("Missing the required parameter 'xAdsRegion' when calling getContainerJobByContainer");
      }

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getContainerJobByContainer");
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getContainerJobByContainer");
      }

      var pathParams = {
        'containerId': containerId,
        'jobId': jobId
      };
      var queryParams = {};
      var headerParams = {
        'x-ads-region': xAdsRegion
      };
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContainerJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/jobs/{jobId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Container Job
     * All POST, PUT, PATCH and DELETE calls to the containers resource will result in a job. This endpoint can be used to track the progress of these jobs.
     * @param {module:model/ContainerRegion} xAdsRegion The region the container resides in.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} jobId The GUID that that uniquely identifies the Job.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContainerJob}
     */

  }, {
    key: 'getContainerJobByContainer',
    value: function getContainerJobByContainer(xAdsRegion, containerId, jobId) {
      return this.getContainerJobByContainerWithHttpInfo(xAdsRegion, containerId, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Sets
     * @param {String} containerId The unique container ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of model sets to return in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @param {String} opts.name A Model Set name filter. This is an equality filter.
     * @param {String} opts.folderUrn A folder URN filter.
     * @param {Boolean} opts.includeDisabled Set to true to include disabled model sets, default false.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetSummaryCollection} and HTTP response
     */

  }, {
    key: 'getModelSetsWithHttpInfo',
    value: function getModelSetsWithHttpInfo(containerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSets");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {
        'pageLimit': opts['pageLimit'],
        'continuationToken': opts['continuationToken'],
        'name': opts['name'],
        'folderUrn': opts['folderUrn'],
        'includeDisabled': opts['includeDisabled']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelSetSummaryCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Sets
     * @param {String} containerId The unique container ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit The maximum number of model sets to return in a page. If not specified the default page limit is used, this value is reserved by the server.
     * @param {String} opts.continuationToken The token indicating the start of the page, otherwise the first page will be retrieved.
     * @param {String} opts.name A Model Set name filter. This is an equality filter.
     * @param {String} opts.folderUrn A folder URN filter.
     * @param {Boolean} opts.includeDisabled Set to true to include disabled model sets, default false.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetSummaryCollection}
     */

  }, {
    key: 'getModelSets',
    value: function getModelSets(containerId, opts) {
      return this.getModelSetsWithHttpInfo(containerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Refresh Model Set Permissions.
     * Request Model Set permission re-fresh for the container.
     * @param {String} containerId The Container GUID of the Container in which Model Set permissions will be checked.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContainerJob} and HTTP response
     */

  }, {
    key: 'refreshModelSetPermissionsWithHttpInfo',
    value: function refreshModelSetPermissionsWithHttpInfo(containerId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling refreshModelSetPermissions");
      }

      var pathParams = {
        'containerId': containerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContainerJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/permissions:refresh', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Refresh Model Set Permissions.
     * Request Model Set permission re-fresh for the container.
     * @param {String} containerId The Container GUID of the Container in which Model Set permissions will be checked.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContainerJob}
     */

  }, {
    key: 'refreshModelSetPermissions',
    value: function refreshModelSetPermissions(containerId) {
      return this.refreshModelSetPermissionsWithHttpInfo(containerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContainersApi;
}();

exports.default = ContainersApi;
//# sourceMappingURL=ContainersApi.js.map