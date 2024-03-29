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
 * The ClashGroupClashIntersection model module.
 * @module model/ClashGroupClashIntersection
 * @version 3.3.12
 */
var ClashGroupClashIntersection = function () {
  /**
   * Constructs a new <code>ClashGroupClashIntersection</code>.
   * A clash group intersected with a specific clash test
   * @alias module:model/ClashGroupClashIntersection
   * @param id {String} 
   * @param createdAtVersion {Number} 
   */
  function ClashGroupClashIntersection(id, createdAtVersion) {
    _classCallCheck(this, ClashGroupClashIntersection);

    ClashGroupClashIntersection.initialize(this, id, createdAtVersion);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClashGroupClashIntersection, null, [{
    key: 'initialize',
    value: function initialize(obj, id, createdAtVersion) {
      obj['id'] = id;
      obj['createdAtVersion'] = createdAtVersion;
    }

    /**
     * Constructs a <code>ClashGroupClashIntersection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClashGroupClashIntersection} obj Optional instance to populate.
     * @return {module:model/ClashGroupClashIntersection} The populated <code>ClashGroupClashIntersection</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClashGroupClashIntersection();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('originalClashTestId')) {
          obj['originalClashTestId'] = _ApiClient2.default.convertToType(data['originalClashTestId'], 'String');
        }
        if (data.hasOwnProperty('createdAtVersion')) {
          obj['createdAtVersion'] = _ApiClient2.default.convertToType(data['createdAtVersion'], 'Number');
        }
        if (data.hasOwnProperty('existing')) {
          obj['existing'] = _ApiClient2.default.convertToType(data['existing'], ['Number']);
        }
        if (data.hasOwnProperty('resolved')) {
          obj['resolved'] = _ApiClient2.default.convertToType(data['resolved'], ['Number']);
        }
      }
      return obj;
    }
  }]);

  return ClashGroupClashIntersection;
}();

/**
 * @member {String} id
 */


ClashGroupClashIntersection.prototype['id'] = undefined;

/**
 * The original clash test ID for the clash group
 * @member {String} originalClashTestId
 */
ClashGroupClashIntersection.prototype['originalClashTestId'] = undefined;

/**
 * @member {Number} createdAtVersion
 */
ClashGroupClashIntersection.prototype['createdAtVersion'] = undefined;

/**
 * @member {Array.<Number>} existing
 */
ClashGroupClashIntersection.prototype['existing'] = undefined;

/**
 * @member {Array.<Number>} resolved
 */
ClashGroupClashIntersection.prototype['resolved'] = undefined;

exports.default = ClashGroupClashIntersection;
//# sourceMappingURL=ClashGroupClashIntersection.js.map