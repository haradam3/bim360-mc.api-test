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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The IndexResource model module.
 * @module model/IndexResource
 * @version 1.2.0
 */
var IndexResource = function () {
  /**
   * Constructs a new <code>IndexResource</code>.
   * A downloadable resource associated with a model set version index
   * @alias module:model/IndexResource
   * @param type {module:model/IndexResource.TypeEnum} 
   * @param encoding {module:model/IndexResource.EncodingEnum} 
   * @param url {String} 
   * @param headers {Object.<String, String>} 
   */
  function IndexResource(type, encoding, url, headers) {
    _classCallCheck(this, IndexResource);

    IndexResource.initialize(this, type, encoding, url, headers);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndexResource, null, [{
    key: 'initialize',
    value: function initialize(obj, type, encoding, url, headers) {
      obj['type'] = type;
      obj['encoding'] = encoding;
      obj['url'] = url;
      obj['headers'] = headers;
    }

    /**
     * Constructs a <code>IndexResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndexResource} obj Optional instance to populate.
     * @return {module:model/IndexResource} The populated <code>IndexResource</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndexResource();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient2.default.convertToType(data['encoding'], 'String');
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

  return IndexResource;
}();

/**
 * @member {module:model/IndexResource.TypeEnum} type
 */


IndexResource.prototype['type'] = undefined;

/**
 * @member {module:model/IndexResource.EncodingEnum} encoding
 */
IndexResource.prototype['encoding'] = undefined;

/**
 * @member {String} url
 */
IndexResource.prototype['url'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
IndexResource.prototype['headers'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IndexResource['TypeEnum'] = {

  /**
   * value: "application/json"
   * @const
   */
  "application/json": "application/json"
};

/**
 * Allowed values for the <code>encoding</code> property.
 * @enum {String}
 * @readonly
 */
IndexResource['EncodingEnum'] = {

  /**
   * value: "gzip"
   * @const
   */
  "gzip": "gzip"
};

exports.default = IndexResource;
//# sourceMappingURL=IndexResource.js.map