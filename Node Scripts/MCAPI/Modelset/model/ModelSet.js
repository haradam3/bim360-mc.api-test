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

var _ModelSetFolder = require('./ModelSetFolder');

var _ModelSetFolder2 = _interopRequireDefault(_ModelSetFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ModelSet model module.
 * @module model/ModelSet
 * @version 3.0.39
 */
var ModelSet = function () {
  /**
   * Constructs a new <code>ModelSet</code>.
   * The full definition of a model set.
   * @alias module:model/ModelSet
   * @param modelSetId {String} The ID of the model set.
   * @param containerId {String} The ID of the container the model set is in.
   * @param folders {Array.<module:model/ModelSetFolder>} The ModelSetFolders that determine the documents included in the model set.
   * @param createdBy {String} The ID of the user who created this model set.
   * @param createdTime {Date} The date and time this model set was created.
   */
  function ModelSet(modelSetId, containerId, folders, createdBy, createdTime) {
    _classCallCheck(this, ModelSet);

    ModelSet.initialize(this, modelSetId, containerId, folders, createdBy, createdTime);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelSet, null, [{
    key: 'initialize',
    value: function initialize(obj, modelSetId, containerId, folders, createdBy, createdTime) {
      obj['modelSetId'] = modelSetId;
      obj['containerId'] = containerId;
      obj['folders'] = folders;
      obj['createdBy'] = createdBy;
      obj['createdTime'] = createdTime;
    }

    /**
     * Constructs a <code>ModelSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelSet} obj Optional instance to populate.
     * @return {module:model/ModelSet} The populated <code>ModelSet</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelSet();

        if (data.hasOwnProperty('modelSetId')) {
          obj['modelSetId'] = _ApiClient2.default.convertToType(data['modelSetId'], 'String');
        }
        if (data.hasOwnProperty('containerId')) {
          obj['containerId'] = _ApiClient2.default.convertToType(data['containerId'], 'String');
        }
        if (data.hasOwnProperty('folders')) {
          obj['folders'] = _ApiClient2.default.convertToType(data['folders'], [_ModelSetFolder2.default]);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient2.default.convertToType(data['createdBy'], 'String');
        }
        if (data.hasOwnProperty('createdTime')) {
          obj['createdTime'] = _ApiClient2.default.convertToType(data['createdTime'], 'Date');
        }
        if (data.hasOwnProperty('isDisabled')) {
          obj['isDisabled'] = _ApiClient2.default.convertToType(data['isDisabled'], 'Boolean');
        }
        if (data.hasOwnProperty('tipVersion')) {
          obj['tipVersion'] = _ApiClient2.default.convertToType(data['tipVersion'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return ModelSet;
}();

/**
 * The ID of the model set.
 * @member {String} modelSetId
 */


ModelSet.prototype['modelSetId'] = undefined;

/**
 * The ID of the container the model set is in.
 * @member {String} containerId
 */
ModelSet.prototype['containerId'] = undefined;

/**
 * The ModelSetFolders that determine the documents included in the model set.
 * @member {Array.<module:model/ModelSetFolder>} folders
 */
ModelSet.prototype['folders'] = undefined;

/**
 * The name of the Model Set. This name must be unique within the specified Container
 * @member {String} name
 */
ModelSet.prototype['name'] = undefined;

/**
 * A textual description of the model set.
 * @member {String} description
 */
ModelSet.prototype['description'] = undefined;

/**
 * The ID of the user who created this model set.
 * @member {String} createdBy
 */
ModelSet.prototype['createdBy'] = undefined;

/**
 * The date and time this model set was created.
 * @member {Date} createdTime
 */
ModelSet.prototype['createdTime'] = undefined;

/**
 * If true model set versions will not be automatically created following changes to model Documents within the Model Set. This setting is only applicable to Available Model Sets.
 * @member {Boolean} isDisabled
 */
ModelSet.prototype['isDisabled'] = undefined;

/**
 * The version number of the most recent version of the model set.
 * @member {Number} tipVersion
 */
ModelSet.prototype['tipVersion'] = undefined;

exports.default = ModelSet;
//# sourceMappingURL=ModelSet.js.map