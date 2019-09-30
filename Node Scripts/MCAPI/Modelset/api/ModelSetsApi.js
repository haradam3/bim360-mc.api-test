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

var _ContainerRegion = require('../model/ContainerRegion');

var _ContainerRegion2 = _interopRequireDefault(_ContainerRegion);

var _FolderReference = require('../model/FolderReference');

var _FolderReference2 = _interopRequireDefault(_FolderReference);

var _ModelSet = require('../model/ModelSet');

var _ModelSet2 = _interopRequireDefault(_ModelSet);

var _ModelSetActions = require('../model/ModelSetActions');

var _ModelSetActions2 = _interopRequireDefault(_ModelSetActions);

var _ModelSetJob = require('../model/ModelSetJob');

var _ModelSetJob2 = _interopRequireDefault(_ModelSetJob);

var _ModelSetPermissionCollection = require('../model/ModelSetPermissionCollection');

var _ModelSetPermissionCollection2 = _interopRequireDefault(_ModelSetPermissionCollection);

var _NewModelSetIssue = require('../model/NewModelSetIssue');

var _NewModelSetIssue2 = _interopRequireDefault(_NewModelSetIssue);

var _NewModelSetName = require('../model/NewModelSetName');

var _NewModelSetName2 = _interopRequireDefault(_NewModelSetName);

var _ResourceError = require('../model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ModelSets service.
* @module api/ModelSetsApi
* @version 3.0.39
*/
var ModelSetsApi = function () {

  /**
  * Constructs a new ModelSetsApi. 
  * @alias module:api/ModelSetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ModelSetsApi(apiClient) {
    _classCallCheck(this, ModelSetsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Add model set issue
   * Add model set visual inspection issue
   * @param {String} containerId The GUID that that uniquely identifies the Container.
   * @param {String} modelSetId The ID that uniquely identifies the model set.
   * @param {Object} opts Optional parameters
   * @param {Array.<NewModelSetIssue>} opts.newModelSetIssue The new model set issue.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
   */


  _createClass(ModelSetsApi, [{
    key: 'addModelSetIssueWithHttpInfo',
    value: function addModelSetIssueWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['newModelSetIssue'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling addModelSetIssue");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling addModelSetIssue");
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
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/issues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add model set issue
     * Add model set visual inspection issue
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Array.<NewModelSetIssue>} opts.newModelSetIssue The new model set issue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'addModelSetIssue',
    value: function addModelSetIssue(containerId, modelSetId, opts) {
      return this.addModelSetIssueWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Add Model Set Permissions
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Array.<ModelSetActions>} opts.modelSetActions The request with the permissions to add.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
    key: 'addModelSetPermissionsWithHttpInfo',
    value: function addModelSetPermissionsWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['modelSetActions'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling addModelSetPermissions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling addModelSetPermissions");
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
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/permissions:add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add Model Set Permissions
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Array.<ModelSetActions>} opts.modelSetActions The request with the permissions to add.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'addModelSetPermissions',
    value: function addModelSetPermissions(containerId, modelSetId, opts) {
      return this.addModelSetPermissionsWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Model Set Permissions.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Array.<ModelSetActions>} opts.modelSetActions The request with the permissions to delete.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
    key: 'deleteModelSetPermissionsWithHttpInfo',
    value: function deleteModelSetPermissionsWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['modelSetActions'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling deleteModelSetPermissions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling deleteModelSetPermissions");
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
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/permissions:delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Delete Model Set Permissions.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {Array.<ModelSetActions>} opts.modelSetActions The request with the permissions to delete.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'deleteModelSetPermissions',
    value: function deleteModelSetPermissions(containerId, modelSetId, opts) {
      return this.deleteModelSetPermissionsWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Publish Folder Changed Events
     * This endpoint can be used to signal the Model Set Service when CMS (BIM 360 Docs) folder content changes. Calling this method will cause the Model Set Service to automatically generate new Model Set Versions in response to the new content in the folder. If the folder content change does not necessitate a new Model Set Version e.g. the configured Model Set Folder filter excludes the changed models then no new Model Set Version(s) will be created. This is a one-way operation and will not re-direct callers via an HTTP 303 response.
     * @param {module:model/ContainerRegion} xAdsRegion The region the container resides in.
     * @param {Object} opts Optional parameters
     * @param {module:model/FolderReference} opts.folderReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'folderChangedEventWithHttpInfo',
    value: function folderChangedEventWithHttpInfo(xAdsRegion, opts) {
      opts = opts || {};
      var postBody = opts['folderReference'];

      // verify the required parameter 'xAdsRegion' is set
      if (xAdsRegion === undefined || xAdsRegion === null) {
        throw new Error("Missing the required parameter 'xAdsRegion' when calling folderChangedEvent");
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
      var returnType = null;

      return this.apiClient.callApi('/v3/events/folder:changed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Publish Folder Changed Events
     * This endpoint can be used to signal the Model Set Service when CMS (BIM 360 Docs) folder content changes. Calling this method will cause the Model Set Service to automatically generate new Model Set Versions in response to the new content in the folder. If the folder content change does not necessitate a new Model Set Version e.g. the configured Model Set Folder filter excludes the changed models then no new Model Set Version(s) will be created. This is a one-way operation and will not re-direct callers via an HTTP 303 response.
     * @param {module:model/ContainerRegion} xAdsRegion The region the container resides in.
     * @param {Object} opts Optional parameters
     * @param {module:model/FolderReference} opts.folderReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'folderChangedEvent',
    value: function folderChangedEvent(xAdsRegion, opts) {
      return this.folderChangedEventWithHttpInfo(xAdsRegion, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Gets Model Set.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSet} and HTTP response
     */

  }, {
    key: 'getModelSetWithHttpInfo',
    value: function getModelSetWithHttpInfo(containerId, modelSetId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSet");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSet");
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
      var returnType = _ModelSet2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Gets Model Set.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSet}
     */

  }, {
    key: 'getModelSet',
    value: function getModelSet(containerId, modelSetId) {
      return this.getModelSetWithHttpInfo(containerId, modelSetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set Job.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that that uniquely identifies the Model Set.
     * @param {String} jobId The ID that that uniquely identifies the Job.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
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
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/jobs/{jobId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set Job.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that that uniquely identifies the Model Set.
     * @param {String} jobId The ID that that uniquely identifies the Job.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'getModelSetJob',
    value: function getModelSetJob(containerId, modelSetId, jobId) {
      return this.getModelSetJobWithHttpInfo(containerId, modelSetId, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Model Set Permissions.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetPermissionCollection} and HTTP response
     */

  }, {
    key: 'getModelSetPermissionsWithHttpInfo',
    value: function getModelSetPermissionsWithHttpInfo(containerId, modelSetId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getModelSetPermissions");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling getModelSetPermissions");
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
      var returnType = _ModelSetPermissionCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Model Set Permissions.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The ID that uniquely identifies the model set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetPermissionCollection}
     */

  }, {
    key: 'getModelSetPermissions',
    value: function getModelSetPermissions(containerId, modelSetId) {
      return this.getModelSetPermissionsWithHttpInfo(containerId, modelSetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update Model Set Name and or Description.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewModelSetName} opts.newModelSetName Model Set display text update.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelSetJob} and HTTP response
     */

  }, {
    key: 'patchModelSetNameDescriptionWithHttpInfo',
    value: function patchModelSetNameDescriptionWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['newModelSetName'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling patchModelSetNameDescription");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling patchModelSetNameDescription");
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
      var returnType = _ModelSetJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update Model Set Name and or Description.
     * @param {String} containerId The GUID that that uniquely identifies the Container.
     * @param {String} modelSetId The GUID that uniquely identifies the model set.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewModelSetName} opts.newModelSetName Model Set display text update.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelSetJob}
     */

  }, {
    key: 'patchModelSetNameDescription',
    value: function patchModelSetNameDescription(containerId, modelSetId, opts) {
      return this.patchModelSetNameDescriptionWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ModelSetsApi;
}();

exports.default = ModelSetsApi;
//# sourceMappingURL=ModelSetsApi.js.map