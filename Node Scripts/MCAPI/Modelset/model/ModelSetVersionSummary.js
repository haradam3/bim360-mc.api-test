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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ModelSetVersionSummary model module.
 * @module model/ModelSetVersionSummary
 * @version 3.0.39
 */
var ModelSetVersionSummary = function () {
  /**
   * Constructs a new <code>ModelSetVersionSummary</code>.
   * A model set version summary.
   * @alias module:model/ModelSetVersionSummary
   * @param version {Number} The version number.
   * @param createTime {Date} The date and time that the model set version was created.
   * @param status {module:model/ModelSetVersionSummary.StatusEnum} The creation status of the model set version
   */
  function ModelSetVersionSummary(version, createTime, status) {
    _classCallCheck(this, ModelSetVersionSummary);

    ModelSetVersionSummary.initialize(this, version, createTime, status);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelSetVersionSummary, null, [{
    key: 'initialize',
    value: function initialize(obj, version, createTime, status) {
      obj['version'] = version;
      obj['createTime'] = createTime;
      obj['status'] = status;
    }

    /**
     * Constructs a <code>ModelSetVersionSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelSetVersionSummary} obj Optional instance to populate.
     * @return {module:model/ModelSetVersionSummary} The populated <code>ModelSetVersionSummary</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelSetVersionSummary();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient2.default.convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('createTime')) {
          obj['createTime'] = _ApiClient2.default.convertToType(data['createTime'], 'Date');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
        }
      }
      return obj;
    }
  }]);

  return ModelSetVersionSummary;
}();

/**
 * The version number.
 * @member {Number} version
 */


ModelSetVersionSummary.prototype['version'] = undefined;

/**
 * The date and time that the model set version was created.
 * @member {Date} createTime
 */
ModelSetVersionSummary.prototype['createTime'] = undefined;

/**
 * The creation status of the model set version
 * @member {module:model/ModelSetVersionSummary.StatusEnum} status
 */
ModelSetVersionSummary.prototype['status'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ModelSetVersionSummary['StatusEnum'] = {

  /**
   * value: "Pending"
   * @const
   */
  "Pending": "Pending",

  /**
   * value: "Processing"
   * @const
   */
  "Processing": "Processing",

  /**
   * value: "Successful"
   * @const
   */
  "Successful": "Successful",

  /**
   * value: "Partial"
   * @const
   */
  "Partial": "Partial",

  /**
   * value: "Failed"
   * @const
   */
  "Failed": "Failed"
};

exports.default = ModelSetVersionSummary;
//# sourceMappingURL=ModelSetVersionSummary.js.map