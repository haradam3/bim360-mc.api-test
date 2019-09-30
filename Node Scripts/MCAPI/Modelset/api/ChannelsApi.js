"use strict";

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

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Channel = require("../model/Channel");

var _Channel2 = _interopRequireDefault(_Channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Channels service.
* @module api/ChannelsApi
* @version 3.0.39
*/
var ChannelsApi = function () {

  /**
  * Constructs a new ChannelsApi. 
  * @alias module:api/ChannelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ChannelsApi(apiClient) {
    _classCallCheck(this, ChannelsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get Push Notification Channels
   * This endpoint will return a collection of PubNub channels on which the APIs will send push notifications to callers. For more information about how to use PubNub SDKs to subscribe to push notifications see the &lt;a href&#x3D;\&quot;https://www.pubnub.com/docs\&quot;&gt;PubNub Developer Documentation&lt;/a&gt;. You will also need to contact the &lt;a href&#x3D;\&quot;https://developer.autodesk.com/api/notification/internal/\&quot;&gt;Autodesk Notification Service&lt;/a&gt; owners to get access keys. The channel IDs returned by this method can be used directly in PubNub&#39;s SDKs.
   * @param {String} containerId The Container GUID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Channel>} and HTTP response
   */


  _createClass(ChannelsApi, [{
    key: "getChannelsWithHttpInfo",
    value: function getChannelsWithHttpInfo(containerId) {
      var postBody = null;

      // verify the required parameter 'containerId' is set
      if (containerId === undefined || containerId === null) {
        throw new Error("Missing the required parameter 'containerId' when calling getChannels");
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
      var returnType = [_Channel2.default];

      return this.apiClient.callApi('/v3/containers/{containerId}/channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get Push Notification Channels
     * This endpoint will return a collection of PubNub channels on which the APIs will send push notifications to callers. For more information about how to use PubNub SDKs to subscribe to push notifications see the &lt;a href&#x3D;\&quot;https://www.pubnub.com/docs\&quot;&gt;PubNub Developer Documentation&lt;/a&gt;. You will also need to contact the &lt;a href&#x3D;\&quot;https://developer.autodesk.com/api/notification/internal/\&quot;&gt;Autodesk Notification Service&lt;/a&gt; owners to get access keys. The channel IDs returned by this method can be used directly in PubNub&#39;s SDKs.
     * @param {String} containerId The Container GUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Channel>}
     */

  }, {
    key: "getChannels",
    value: function getChannels(containerId) {
      return this.getChannelsWithHttpInfo(containerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ChannelsApi;
}();

exports.default = ChannelsApi;
//# sourceMappingURL=ChannelsApi.js.map