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
 * The BasicError model module.
 * @module model/BasicError
 * @version 3.3.12
 */
var BasicError = function () {
  /**
   * Constructs a new <code>BasicError</code>.
   * An Error associated with a Resource
   * @alias module:model/BasicError
   * @param type {String} The Error Code
   */
  function BasicError(type) {
    _classCallCheck(this, BasicError);

    BasicError.initialize(this, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasicError, null, [{
    key: 'initialize',
    value: function initialize(obj, type) {
      obj['type'] = type;
    }

    /**
     * Constructs a <code>BasicError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicError} obj Optional instance to populate.
     * @return {module:model/BasicError} The populated <code>BasicError</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasicError();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient2.default.convertToType(data['detail'], 'String');
        }
      }
      return obj;
    }
  }]);

  return BasicError;
}();

/**
 * The Error Code
 * @member {String} type
 */


BasicError.prototype['type'] = undefined;

/**
 * A short title for Error
 * @member {String} title
 */
BasicError.prototype['title'] = undefined;

/**
 * A more detailed, human readable description of error. The assumption being that this message will not be localized and therefore EN-US. UI consumers can use error.type value to provide a localized version of this error for presentation
 * @member {String} detail
 */
BasicError.prototype['detail'] = undefined;

exports.default = BasicError;
//# sourceMappingURL=BasicError.js.map