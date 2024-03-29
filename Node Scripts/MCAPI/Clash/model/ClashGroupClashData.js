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

var _ClashGroupClashDataClashInstances = require('./ClashGroupClashDataClashInstances');

var _ClashGroupClashDataClashInstances2 = _interopRequireDefault(_ClashGroupClashDataClashInstances);

var _ClashGroupClashDataClashes = require('./ClashGroupClashDataClashes');

var _ClashGroupClashDataClashes2 = _interopRequireDefault(_ClashGroupClashDataClashes);

var _ClashGroupClashDataDocuments = require('./ClashGroupClashDataDocuments');

var _ClashGroupClashDataDocuments2 = _interopRequireDefault(_ClashGroupClashDataDocuments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ClashGroupClashData model module.
 * @module model/ClashGroupClashData
 * @version 3.3.12
 */
var ClashGroupClashData = function () {
  /**
   * Constructs a new <code>ClashGroupClashData</code>.
   * The clash data associated with a clash group
   * @alias module:model/ClashGroupClashData
   */
  function ClashGroupClashData() {
    _classCallCheck(this, ClashGroupClashData);

    ClashGroupClashData.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClashGroupClashData, null, [{
    key: 'initialize',
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ClashGroupClashData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClashGroupClashData} obj Optional instance to populate.
     * @return {module:model/ClashGroupClashData} The populated <code>ClashGroupClashData</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClashGroupClashData();

        if (data.hasOwnProperty('documents')) {
          obj['documents'] = _ApiClient2.default.convertToType(data['documents'], [_ClashGroupClashDataDocuments2.default]);
        }
        if (data.hasOwnProperty('clashes')) {
          obj['clashes'] = _ApiClient2.default.convertToType(data['clashes'], [_ClashGroupClashDataClashes2.default]);
        }
        if (data.hasOwnProperty('clashInstances')) {
          obj['clashInstances'] = _ApiClient2.default.convertToType(data['clashInstances'], [_ClashGroupClashDataClashInstances2.default]);
        }
      }
      return obj;
    }
  }]);

  return ClashGroupClashData;
}();

/**
 * @member {Array.<module:model/ClashGroupClashDataDocuments>} documents
 */


ClashGroupClashData.prototype['documents'] = undefined;

/**
 * @member {Array.<module:model/ClashGroupClashDataClashes>} clashes
 */
ClashGroupClashData.prototype['clashes'] = undefined;

/**
 * @member {Array.<module:model/ClashGroupClashDataClashInstances>} clashInstances
 */
ClashGroupClashData.prototype['clashInstances'] = undefined;

exports.default = ClashGroupClashData;
//# sourceMappingURL=ClashGroupClashData.js.map