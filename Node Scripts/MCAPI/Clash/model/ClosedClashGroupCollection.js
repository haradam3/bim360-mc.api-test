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

var _ClosedClashGroup = require('./ClosedClashGroup');

var _ClosedClashGroup2 = _interopRequireDefault(_ClosedClashGroup);

var _CollectionPage = require('./CollectionPage');

var _CollectionPage2 = _interopRequireDefault(_CollectionPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ClosedClashGroupCollection model module.
 * @module model/ClosedClashGroupCollection
 * @version 3.3.12
 */
var ClosedClashGroupCollection = function () {
  /**
   * Constructs a new <code>ClosedClashGroupCollection</code>.
   * A set of Closed Clash Groups
   * @alias module:model/ClosedClashGroupCollection
   * @param page {module:model/CollectionPage} 
   * @param groups {Array.<module:model/ClosedClashGroup>} 
   */
  function ClosedClashGroupCollection(page, groups) {
    _classCallCheck(this, ClosedClashGroupCollection);

    ClosedClashGroupCollection.initialize(this, page, groups);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClosedClashGroupCollection, null, [{
    key: 'initialize',
    value: function initialize(obj, page, groups) {
      obj['page'] = page;
      obj['groups'] = groups;
    }

    /**
     * Constructs a <code>ClosedClashGroupCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClosedClashGroupCollection} obj Optional instance to populate.
     * @return {module:model/ClosedClashGroupCollection} The populated <code>ClosedClashGroupCollection</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClosedClashGroupCollection();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _CollectionPage2.default.constructFromObject(data['page']);
        }
        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient2.default.convertToType(data['groups'], [_ClosedClashGroup2.default]);
        }
      }
      return obj;
    }
  }]);

  return ClosedClashGroupCollection;
}();

/**
 * @member {module:model/CollectionPage} page
 */


ClosedClashGroupCollection.prototype['page'] = undefined;

/**
 * @member {Array.<module:model/ClosedClashGroup>} groups
 */
ClosedClashGroupCollection.prototype['groups'] = undefined;

exports.default = ClosedClashGroupCollection;
//# sourceMappingURL=ClosedClashGroupCollection.js.map