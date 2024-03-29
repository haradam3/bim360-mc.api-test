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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ClashTestResource model module.
 * @module model/ClashTestResource
 * @version 3.3.12
 */
var ClashTestResource = function () {
  /**
   * Constructs a new <code>ClashTestResource</code>.
   * A downloadable resource associated with a model set version clash test run
   * @alias module:model/ClashTestResource
   * @param type {String} 
   * @param extension {module:model/ClashTestResource.ExtensionEnum} 
   * @param url {String} 
   * @param headers {Object.<String, String>} 
   */
  function ClashTestResource(type, extension, url, headers) {
    _classCallCheck(this, ClashTestResource);

    ClashTestResource.initialize(this, type, extension, url, headers);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClashTestResource, null, [{
    key: 'initialize',
    value: function initialize(obj, type, extension, url, headers) {
      obj['type'] = type;
      obj['extension'] = extension;
      obj['url'] = url;
      obj['headers'] = headers;
    }

    /**
     * Constructs a <code>ClashTestResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClashTestResource} obj Optional instance to populate.
     * @return {module:model/ClashTestResource} The populated <code>ClashTestResource</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClashTestResource();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient2.default.convertToType(data['extension'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient2.default.convertToType(data['headers'], { 'String': 'String' });
        }
      }
      return obj;
    }
  }]);

  return ClashTestResource;
}();

/**
 * @member {String} type
 */


ClashTestResource.prototype['type'] = undefined;

/**
 * @member {module:model/ClashTestResource.ExtensionEnum} extension
 */
ClashTestResource.prototype['extension'] = undefined;

/**
 * @member {String} url
 */
ClashTestResource.prototype['url'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
ClashTestResource.prototype['headers'] = undefined;

/**
 * Allowed values for the <code>extension</code> property.
 * @enum {String}
 * @readonly
 */
ClashTestResource['ExtensionEnum'] = {

  /**
   * value: "json.gz"
   * @const
   */
  "json.gz": "json.gz",

  /**
   * value: "sqlite"
   * @const
   */
  "sqlite": "sqlite"
};

exports.default = ClashTestResource;
//# sourceMappingURL=ClashTestResource.js.map