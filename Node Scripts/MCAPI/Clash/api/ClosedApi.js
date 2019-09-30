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

var _ClashGroupClashIntersectionCollection = require('../model/ClashGroupClashIntersectionCollection');

var _ClashGroupClashIntersectionCollection2 = _interopRequireDefault(_ClashGroupClashIntersectionCollection);

var _ClashGroupJob = require('../model/ClashGroupJob');

var _ClashGroupJob2 = _interopRequireDefault(_ClashGroupJob);

var _ClosedClashGroupClashData = require('../model/ClosedClashGroupClashData');

var _ClosedClashGroupClashData2 = _interopRequireDefault(_ClosedClashGroupClashData);

var _ClosedClashGroupCollection = require('../model/ClosedClashGroupCollection');

var _ClosedClashGroupCollection2 = _interopRequireDefault(_ClosedClashGroupCollection);

var _NewClosedClashGroup = require('../model/NewClosedClashGroup');

var _NewClosedClashGroup2 = _interopRequireDefault(_NewClosedClashGroup);

var _ResourceError = require('../model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

var _SortDirection = require('../model/SortDirection');

var _SortDirection2 = _interopRequireDefault(_SortDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Closed service.
* @module api/ClosedApi
* @version 3.3.12
*/
var ClosedApi = function () {

  /**
  * Constructs a new ClosedApi. 
  * @alias module:api/ClosedApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ClosedApi(apiClient) {
    _classCallCheck(this, ClosedApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Add closed clash group in batch
   * Clash groups which are closed will not be presented should they occur in subsequent clash tests. The clash will still be present in the model however it is not deemed necessary to remove it.
   * @param {String} containerId Container ID.
   * @param {String} testId Clash Test Id.
   * @param {Object} opts Optional parameters
   * @param {Array.<NewClosedClashGroup>} opts.newClosedClashGroup 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClashGroupJob} and HTTP response
   */


  _createClass(ClosedApi, [{
    key: 'addClosedClashGroupBatchWithHttpInfo',
    value: function addClosedClashGroupBatchWithHttpInfo(containerId, testId, opts) {
      opts = opts || {};
      var postBody = opts['newClosedClashGroup'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling addClosedClashGroupBatch");
      }

      // verify the required parameter 'testId' is set
      if (testId === undefined || testId === null) {
        throw new Error("Missing the required parameter 'testId' when calling addClosedClashGroupBatch");
      }

      var pathParams = {
        'containerId': containerId,
        'testId': testId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ClashGroupJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/tests/{testId}/clashes:close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add closed clash group in batch
     * Clash groups which are closed will not be presented should they occur in subsequent clash tests. The clash will still be present in the model however it is not deemed necessary to remove it.
     * @param {String} containerId Container ID.
     * @param {String} testId Clash Test Id.
     * @param {Object} opts Optional parameters
     * @param {Array.<NewClosedClashGroup>} opts.newClosedClashGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClashGroupJob}
     */

  }, {
    key: 'addClosedClashGroupBatch',
    value: function addClosedClashGroupBatch(containerId, testId, opts) {
      return this.addClosedClashGroupBatchWithHttpInfo(containerId, testId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Clash Group Job
     * Get current state of job.
     * @param {String} containerId Container ID.
     * @param {String} jobId Job ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClashGroupJob} and HTTP response
     */

  }, {
    key: 'getClashGroupJobWithHttpInfo',
    value: function getClashGroupJobWithHttpInfo(containerId, jobId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getClashGroupJob");
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getClashGroupJob");
      }

      var pathParams = {
        'containerId': containerId,
        'jobId': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ClashGroupJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/clashes/jobs/{jobId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Clash Group Job
     * Get current state of job.
     * @param {String} containerId Container ID.
     * @param {String} jobId Job ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClashGroupJob}
     */

  }, {
    key: 'getClashGroupJob',
    value: function getClashGroupJob(containerId, jobId) {
      return this.getClashGroupJobWithHttpInfo(containerId, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get closed clash group state relative to specified test
     * This endpoint intersects the closed clash groups stored in the system with the results of the clash test specified in the path. Clashes which were present when the clash group was first defined may now be resolved.
     * @param {String} containerId Container ID.
     * @param {String} testId Clash Test ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit Page Size.
     * @param {String} opts.continuationToken Paging continuation token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClashGroupClashIntersectionCollection} and HTTP response
     */

  }, {
    key: 'getClashTestClosedClashGroupIntersectionWithHttpInfo',
    value: function getClashTestClosedClashGroupIntersectionWithHttpInfo(containerId, testId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getClashTestClosedClashGroupIntersection");
      }

      // verify the required parameter 'testId' is set
      if (testId === undefined || testId === null) {
        throw new Error("Missing the required parameter 'testId' when calling getClashTestClosedClashGroupIntersection");
      }

      var pathParams = {
        'containerId': containerId,
        'testId': testId
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
      var returnType = _ClashGroupClashIntersectionCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/tests/{testId}/clashes/closed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get closed clash group state relative to specified test
     * This endpoint intersects the closed clash groups stored in the system with the results of the clash test specified in the path. Clashes which were present when the clash group was first defined may now be resolved.
     * @param {String} containerId Container ID.
     * @param {String} testId Clash Test ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit Page Size.
     * @param {String} opts.continuationToken Paging continuation token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClashGroupClashIntersectionCollection}
     */

  }, {
    key: 'getClashTestClosedClashGroupIntersection',
    value: function getClashTestClosedClashGroupIntersection(containerId, testId, opts) {
      return this.getClashTestClosedClashGroupIntersectionWithHttpInfo(containerId, testId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get closed clash group clash detail (results) batch
     * This methods intersects the clash groups passed in the body of this method with the clash resources stored for the clash test. This method provides a mechanism for obtaining a sub set of the clash test results for a specific sub-set of clash groups associated with the test.
     * @param {String} containerId Container ID.
     * @param {String} testId Clash Test ID.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ClosedClashGroupClashData>} and HTTP response
     */

  }, {
    key: 'getClosedClashGroupDataBatchWithHttpInfo',
    value: function getClosedClashGroupDataBatchWithHttpInfo(containerId, testId, opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getClosedClashGroupDataBatch");
      }

      // verify the required parameter 'testId' is set
      if (testId === undefined || testId === null) {
        throw new Error("Missing the required parameter 'testId' when calling getClosedClashGroupDataBatch");
      }

      var pathParams = {
        'containerId': containerId,
        'testId': testId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_ClosedClashGroupClashData2.default];

      return this.apiClient.callApi('/v3/containers/{containerId}/tests/{testId}/clashes/closed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get closed clash group clash detail (results) batch
     * This methods intersects the clash groups passed in the body of this method with the clash resources stored for the clash test. This method provides a mechanism for obtaining a sub set of the clash test results for a specific sub-set of clash groups associated with the test.
     * @param {String} containerId Container ID.
     * @param {String} testId Clash Test ID.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ClosedClashGroupClashData>}
     */

  }, {
    key: 'getClosedClashGroupDataBatch',
    value: function getClosedClashGroupDataBatch(containerId, testId, opts) {
      return this.getClosedClashGroupDataBatchWithHttpInfo(containerId, testId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Re-open a closed clash group batch
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set Id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClashGroupJob} and HTTP response
     */

  }, {
    key: 'reopenClosedClashGroupBatchWithHttpInfo',
    value: function reopenClosedClashGroupBatchWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling reopenClosedClashGroupBatch");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling reopenClosedClashGroupBatch");
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
      var returnType = _ClashGroupJob2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/clashes:reopen', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Re-open a closed clash group batch
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set Id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClashGroupJob}
     */

  }, {
    key: 'reopenClosedClashGroupBatch',
    value: function reopenClosedClashGroupBatch(containerId, modelSetId, opts) {
      return this.reopenClosedClashGroupBatchWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Search closed clash groups in model set
     * Search all the closed clash groups in the given model set.
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit Page size.
     * @param {String} opts.continuationToken Paging continuation token.
     * @param {String} opts.clashTestId Filter by Clash Test ID.
     * @param {String} opts.reason Filter by Reason
     * @param {String} opts.createdBy Filter by Created by
     * @param {String} opts.after Filter by Created after
     * @param {String} opts.before Filter by Created before, default UTC now
     * @param {module:model/SortDirection} opts.sort Defines a sort direction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClosedClashGroupCollection} and HTTP response
     */

  }, {
    key: 'searchContainerModelSetClosedClashGroupsWithHttpInfo',
    value: function searchContainerModelSetClosedClashGroupsWithHttpInfo(containerId, modelSetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling searchContainerModelSetClosedClashGroups");
      }

      // verify the required parameter 'modelSetId' is set
      if (modelSetId === undefined || modelSetId === null) {
        throw new Error("Missing the required parameter 'modelSetId' when calling searchContainerModelSetClosedClashGroups");
      }

      var pathParams = {
        'containerId': containerId,
        'modelSetId': modelSetId
      };
      var queryParams = {
        'pageLimit': opts['pageLimit'],
        'continuationToken': opts['continuationToken'],
        'clashTestId': opts['clashTestId'],
        'reason': opts['reason'],
        'createdBy': opts['createdBy'],
        'after': opts['after'],
        'before': opts['before'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['oauth2AuthCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ClosedClashGroupCollection2.default;

      return this.apiClient.callApi('/v3/containers/{containerId}/modelsets/{modelSetId}/clashes/closed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Search closed clash groups in model set
     * Search all the closed clash groups in the given model set.
     * @param {String} containerId Container ID.
     * @param {String} modelSetId Model Set ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageLimit Page size.
     * @param {String} opts.continuationToken Paging continuation token.
     * @param {String} opts.clashTestId Filter by Clash Test ID.
     * @param {String} opts.reason Filter by Reason
     * @param {String} opts.createdBy Filter by Created by
     * @param {String} opts.after Filter by Created after
     * @param {String} opts.before Filter by Created before, default UTC now
     * @param {module:model/SortDirection} opts.sort Defines a sort direction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClosedClashGroupCollection}
     */

  }, {
    key: 'searchContainerModelSetClosedClashGroups',
    value: function searchContainerModelSetClosedClashGroups(containerId, modelSetId, opts) {
      return this.searchContainerModelSetClosedClashGroupsWithHttpInfo(containerId, modelSetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ClosedApi;
}();

exports.default = ClosedApi;
//# sourceMappingURL=ClosedApi.js.map