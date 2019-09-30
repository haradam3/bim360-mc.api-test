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

var _ContextValue = require('./ContextValue');

var _ContextValue2 = _interopRequireDefault(_ContextValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Container model module.
 * @module model/Container
 * @version 3.0.39
 */
var Container = function () {
  /**
   * Constructs a new <code>Container</code>.
   * A container is a data partition used in to restrict the model set of individual API calls. containers conceptually align with the BIM 360 Docs/HQ containers. A container can for example represent a project by passing the account and project ID in the context.
   * @alias module:model/Container
   * @param containerId {String} The ID of this container.
   * @param accountId {String} The Account ID associated with this container.
   * @param projectId {String} The Project ID associated with this container.
   */
  function Container(containerId, accountId, projectId) {
    _classCallCheck(this, Container);

    Container.initialize(this, containerId, accountId, projectId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Container, null, [{
    key: 'initialize',
    value: function initialize(obj, containerId, accountId, projectId) {
      obj['containerId'] = containerId;
      obj['accountId'] = accountId;
      obj['projectId'] = projectId;
    }

    /**
     * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Container} obj Optional instance to populate.
     * @return {module:model/Container} The populated <code>Container</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Container();

        if (data.hasOwnProperty('containerId')) {
          obj['containerId'] = _ApiClient2.default.convertToType(data['containerId'], 'String');
        }
        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient2.default.convertToType(data['accountId'], 'String');
        }
        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient2.default.convertToType(data['projectId'], 'String');
        }
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient2.default.convertToType(data['context'], [_ContextValue2.default]);
        }
      }
      return obj;
    }
  }]);

  return Container;
}();

/**
 * The ID of this container.
 * @member {String} containerId
 */


Container.prototype['containerId'] = undefined;

/**
 * The Account ID associated with this container.
 * @member {String} accountId
 */
Container.prototype['accountId'] = undefined;

/**
 * The Project ID associated with this container.
 * @member {String} projectId
 */
Container.prototype['projectId'] = undefined;

/**
 * @member {Array.<module:model/ContextValue>} context
 */
Container.prototype['context'] = undefined;

exports.default = Container;
//# sourceMappingURL=Container.js.map