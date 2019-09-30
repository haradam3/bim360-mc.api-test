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

var _IndexQuery = require('./IndexQuery');

var _IndexQuery2 = _interopRequireDefault(_IndexQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The NewIndexView model module.
 * @module model/NewIndexView
 * @version 1.2.0
 */
var NewIndexView = function () {
  /**
   * Constructs a new <code>NewIndexView</code>.
   * A new index view
   * @alias module:model/NewIndexView
   * @param name {String} The name of the index view
   * @param query {module:model/IndexQuery} 
   */
  function NewIndexView(name, query) {
    _classCallCheck(this, NewIndexView);

    NewIndexView.initialize(this, name, query);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewIndexView, null, [{
    key: 'initialize',
    value: function initialize(obj, name, query) {
      obj['name'] = name;
      obj['query'] = query;
    }

    /**
     * Constructs a <code>NewIndexView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewIndexView} obj Optional instance to populate.
     * @return {module:model/NewIndexView} The populated <code>NewIndexView</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewIndexView();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('isPublic')) {
          obj['isPublic'] = _ApiClient2.default.convertToType(data['isPublic'], 'Boolean');
        }
        if (data.hasOwnProperty('query')) {
          obj['query'] = _IndexQuery2.default.constructFromObject(data['query']);
        }
      }
      return obj;
    }
  }]);

  return NewIndexView;
}();

/**
 * The name of the index view
 * @member {String} name
 */


NewIndexView.prototype['name'] = undefined;

/**
 * A description of the index view
 * @member {String} description
 */
NewIndexView.prototype['description'] = undefined;

/**
 * The view is accessable to everyone with access to the model set
 * @member {Boolean} isPublic
 */
NewIndexView.prototype['isPublic'] = undefined;

/**
 * @member {module:model/IndexQuery} query
 */
NewIndexView.prototype['query'] = undefined;

exports.default = NewIndexView;
//# sourceMappingURL=NewIndexView.js.map