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

var _BasicError = require('./BasicError');

var _BasicError2 = _interopRequireDefault(_BasicError);

var _IndexManifestSeedFile = require('./IndexManifestSeedFile');

var _IndexManifestSeedFile2 = _interopRequireDefault(_IndexManifestSeedFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The IndexManifest model module.
 * @module model/IndexManifest
 * @version 1.2.0
 */
var IndexManifest = function () {
  /**
   * Constructs a new <code>IndexManifest</code>.
   * @alias module:model/IndexManifest
   * @param containerId {String} The container ID
   * @param schema {String} The indexing schema sem version
   * @param modelSetId {String} The model set ID
   * @param status {module:model/IndexManifest.StatusEnum} The status of the model set version index
   * @param seedFiles {Array.<module:model/IndexManifestSeedFile>} 
   * @param errors {Array.<module:model/BasicError>} 
   */
  function IndexManifest(containerId, schema, modelSetId, status, seedFiles, errors) {
    _classCallCheck(this, IndexManifest);

    IndexManifest.initialize(this, containerId, schema, modelSetId, status, seedFiles, errors);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndexManifest, null, [{
    key: 'initialize',
    value: function initialize(obj, containerId, schema, modelSetId, status, seedFiles, errors) {
      obj['containerId'] = containerId;
      obj['schema'] = schema;
      obj['modelSetId'] = modelSetId;
      obj['status'] = status;
      obj['seedFiles'] = seedFiles;
      obj['errors'] = errors;
    }

    /**
     * Constructs a <code>IndexManifest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndexManifest} obj Optional instance to populate.
     * @return {module:model/IndexManifest} The populated <code>IndexManifest</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndexManifest();

        if (data.hasOwnProperty('containerId')) {
          obj['containerId'] = _ApiClient2.default.convertToType(data['containerId'], 'String');
        }
        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient2.default.convertToType(data['schema'], 'String');
        }
        if (data.hasOwnProperty('modelSetId')) {
          obj['modelSetId'] = _ApiClient2.default.convertToType(data['modelSetId'], 'String');
        }
        if (data.hasOwnProperty('modelSetVersion')) {
          obj['modelSetVersion'] = _ApiClient2.default.convertToType(data['modelSetVersion'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('seedFiles')) {
          obj['seedFiles'] = _ApiClient2.default.convertToType(data['seedFiles'], [_IndexManifestSeedFile2.default]);
        }
        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient2.default.convertToType(data['errors'], [_BasicError2.default]);
        }
      }
      return obj;
    }
  }]);

  return IndexManifest;
}();

/**
 * The container ID
 * @member {String} containerId
 */


IndexManifest.prototype['containerId'] = undefined;

/**
 * The indexing schema sem version
 * @member {String} schema
 */
IndexManifest.prototype['schema'] = undefined;

/**
 * The model set ID
 * @member {String} modelSetId
 */
IndexManifest.prototype['modelSetId'] = undefined;

/**
 * The model set version
 * @member {Number} modelSetVersion
 */
IndexManifest.prototype['modelSetVersion'] = undefined;

/**
 * The status of the model set version index
 * @member {module:model/IndexManifest.StatusEnum} status
 */
IndexManifest.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/IndexManifestSeedFile>} seedFiles
 */
IndexManifest.prototype['seedFiles'] = undefined;

/**
 * @member {Array.<module:model/BasicError>} errors
 */
IndexManifest.prototype['errors'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
IndexManifest['StatusEnum'] = {

  /**
   * value: "Failed"
   * @const
   */
  "Failed": "Failed",

  /**
   * value: "Running"
   * @const
   */
  "Running": "Running",

  /**
   * value: "Succeeded"
   * @const
   */
  "Succeeded": "Succeeded"
};

exports.default = IndexManifest;
//# sourceMappingURL=IndexManifest.js.map