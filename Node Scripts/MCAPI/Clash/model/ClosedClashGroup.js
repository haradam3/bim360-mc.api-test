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

var _CloseReason = require('./CloseReason');

var _CloseReason2 = _interopRequireDefault(_CloseReason);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ClosedClashGroup model module.
 * @module model/ClosedClashGroup
 * @version 3.3.12
 */
var ClosedClashGroup = function () {
  /**
   * Constructs a new <code>ClosedClashGroup</code>.
   * A Closed Clash Group
   * @alias module:model/ClosedClashGroup
   * @param clashTestId {String} 
   * @param title {String} 
   * @param reason {module:model/CloseReason} 
   * @param clashes {Array.<Number>} 
   */
  function ClosedClashGroup(clashTestId, title, reason, clashes) {
    _classCallCheck(this, ClosedClashGroup);

    ClosedClashGroup.initialize(this, clashTestId, title, reason, clashes);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClosedClashGroup, null, [{
    key: 'initialize',
    value: function initialize(obj, clashTestId, title, reason, clashes) {
      obj['clashTestId'] = clashTestId;
      obj['title'] = title;
      obj['reason'] = reason;
      obj['clashes'] = clashes;
    }

    /**
     * Constructs a <code>ClosedClashGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClosedClashGroup} obj Optional instance to populate.
     * @return {module:model/ClosedClashGroup} The populated <code>ClosedClashGroup</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClosedClashGroup();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('clashTestId')) {
          obj['clashTestId'] = _ApiClient2.default.convertToType(data['clashTestId'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _CloseReason2.default.constructFromObject(data['reason']);
        }
        if (data.hasOwnProperty('screenShots')) {
          obj['screenShots'] = _ApiClient2.default.convertToType(data['screenShots'], ['String']);
        }
        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient2.default.convertToType(data['createdBy'], 'String');
        }
        if (data.hasOwnProperty('createdOn')) {
          obj['createdOn'] = _ApiClient2.default.convertToType(data['createdOn'], 'Date');
        }
        if (data.hasOwnProperty('clashes')) {
          obj['clashes'] = _ApiClient2.default.convertToType(data['clashes'], ['Number']);
        }
      }
      return obj;
    }
  }]);

  return ClosedClashGroup;
}();

/**
 * @member {String} id
 */


ClosedClashGroup.prototype['id'] = undefined;

/**
 * @member {String} clashTestId
 */
ClosedClashGroup.prototype['clashTestId'] = undefined;

/**
 * @member {String} title
 */
ClosedClashGroup.prototype['title'] = undefined;

/**
 * @member {String} description
 */
ClosedClashGroup.prototype['description'] = undefined;

/**
 * @member {module:model/CloseReason} reason
 */
ClosedClashGroup.prototype['reason'] = undefined;

/**
 * @member {Array.<String>} screenShots
 */
ClosedClashGroup.prototype['screenShots'] = undefined;

/**
 * @member {String} createdBy
 */
ClosedClashGroup.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdOn
 */
ClosedClashGroup.prototype['createdOn'] = undefined;

/**
 * @member {Array.<Number>} clashes
 */
ClosedClashGroup.prototype['clashes'] = undefined;

exports.default = ClosedClashGroup;
//# sourceMappingURL=ClosedClashGroup.js.map