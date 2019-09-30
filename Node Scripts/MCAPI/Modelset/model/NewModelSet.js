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
 * The NewModelSet model module.
 * @module model/NewModelSet
 * @version 3.0.39
 */
var NewModelSet = function () {
  /**
   * Constructs a new <code>NewModelSet</code>.
   * A request for creating a model set.
   * @alias module:model/NewModelSet
   * @param name {String} The name of the Model Set. This name must be unique within the specified Container
   * @param folders {Array.<module:model/ModelSetFolder>} A list of folder URNs that contain a set of document lineages that will be added to the model set.
   */
  function NewModelSet(name, folders) {
    _classCallCheck(this, NewModelSet);

    NewModelSet.initialize(this, name, folders);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewModelSet, null, [{
    key: 'initialize',
    value: function initialize(obj, name, folders) {
      obj['name'] = name;
      obj['folders'] = folders;
    }

    /**
     * Constructs a <code>NewModelSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewModelSet} obj Optional instance to populate.
     * @return {module:model/NewModelSet} The populated <code>NewModelSet</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewModelSet();

        if (data.hasOwnProperty('modelSetId')) {
          obj['modelSetId'] = _ApiClient2.default.convertToType(data['modelSetId'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('isDisabled')) {
          obj['isDisabled'] = _ApiClient2.default.convertToType(data['isDisabled'], 'Boolean');
        }
        if (data.hasOwnProperty('folders')) {
          obj['folders'] = _ApiClient2.default.convertToType(data['folders'], [_ModelSetFolder2.default]);
        }
      }
      return obj;
    }
  }]);

  return NewModelSet;
}();

/**
 * A GUID unique identifier for the model set. If this value is not supplied a new GUID will be created
 * @member {String} modelSetId
 */


NewModelSet.prototype['modelSetId'] = undefined;

/**
 * The name of the Model Set. This name must be unique within the specified Container
 * @member {String} name
 */
NewModelSet.prototype['name'] = undefined;

/**
 * A textual description of the model set.
 * @member {String} description
 */
NewModelSet.prototype['description'] = undefined;

/**
 * Indicates if new versions will be created for model set changes.
 * @member {Boolean} isDisabled
 */
NewModelSet.prototype['isDisabled'] = undefined;

/**
 * A list of folder URNs that contain a set of document lineages that will be added to the model set.
 * @member {Array.<module:model/ModelSetFolder>} folders
 */
NewModelSet.prototype['folders'] = undefined;

exports.default = NewModelSet;
//# sourceMappingURL=NewModelSet.js.map