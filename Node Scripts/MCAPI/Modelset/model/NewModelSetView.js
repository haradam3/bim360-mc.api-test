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

var _ModelSetViewSummary = require('./ModelSetViewSummary');

var _ModelSetViewSummary2 = _interopRequireDefault(_ModelSetViewSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The NewModelSetView model module.
 * @module model/NewModelSetView
 * @version 3.0.39
 */
var NewModelSetView = function () {
  /**
   * Constructs a new <code>NewModelSetView</code>.
   * A model set view
   * @alias module:model/NewModelSetView
   * @param name {String} The view display name
   * @param isPrivate {Boolean} The view is only accessible to its creator
   * @param documentLineageUrns {Array.<String>} The list of document lineage URNs
   */
  function NewModelSetView(name, isPrivate, documentLineageUrns) {
    _classCallCheck(this, NewModelSetView);

    NewModelSetView.initialize(this, name, isPrivate, documentLineageUrns);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewModelSetView, null, [{
    key: 'initialize',
    value: function initialize(obj, name, isPrivate, documentLineageUrns) {
      obj['name'] = name;
      obj['isPrivate'] = isPrivate;
      obj['documentLineageUrns'] = documentLineageUrns;
    }

    /**
     * Constructs a <code>NewModelSetView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewModelSetView} obj Optional instance to populate.
     * @return {module:model/NewModelSetView} The populated <code>NewModelSetView</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewModelSetView();

        _ApiClient2.default.constructFromObject(data, obj, '');

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('isPrivate')) {
          obj['isPrivate'] = _ApiClient2.default.convertToType(data['isPrivate'], 'Boolean');
        }
        if (data.hasOwnProperty('documentLineageUrns')) {
          obj['documentLineageUrns'] = _ApiClient2.default.convertToType(data['documentLineageUrns'], ['String']);
        }
        if (data.hasOwnProperty('screenshotId')) {
          obj['screenshotId'] = _ApiClient2.default.convertToType(data['screenshotId'], 'String');
        }
        if (data.hasOwnProperty('viewId')) {
          obj['viewId'] = _ApiClient2.default.convertToType(data['viewId'], 'String');
        }
      }
      return obj;
    }
  }]);

  return NewModelSetView;
}();

/**
 * The view display name
 * @member {String} name
 */


NewModelSetView.prototype['name'] = undefined;

/**
 * The view description
 * @member {String} description
 */
NewModelSetView.prototype['description'] = undefined;

/**
 * The view is only accessible to its creator
 * @member {Boolean} isPrivate
 */
NewModelSetView.prototype['isPrivate'] = undefined;

/**
 * The list of document lineage URNs
 * @member {Array.<String>} documentLineageUrns
 */
NewModelSetView.prototype['documentLineageUrns'] = undefined;

/**
 * A view screenshot Id
 * @member {String} screenshotId
 */
NewModelSetView.prototype['screenshotId'] = undefined;

/**
 * The ID of this view.
 * @member {String} viewId
 */
NewModelSetView.prototype['viewId'] = undefined;

exports.default = NewModelSetView;
//# sourceMappingURL=NewModelSetView.js.map