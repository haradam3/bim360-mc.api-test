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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The UpdateModelSetView model module.
 * @module model/UpdateModelSetView
 * @version 3.0.39
 */
var UpdateModelSetView = function () {
  /**
   * Constructs a new <code>UpdateModelSetView</code>.
   * @alias module:model/UpdateModelSetView
   */
  function UpdateModelSetView() {
    _classCallCheck(this, UpdateModelSetView);

    UpdateModelSetView.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateModelSetView, null, [{
    key: 'initialize',
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UpdateModelSetView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateModelSetView} obj Optional instance to populate.
     * @return {module:model/UpdateModelSetView} The populated <code>UpdateModelSetView</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateModelSetView();

        if (data.hasOwnProperty('oldName')) {
          obj['oldName'] = _ApiClient2.default.convertToType(data['oldName'], 'String');
        }
        if (data.hasOwnProperty('newName')) {
          obj['newName'] = _ApiClient2.default.convertToType(data['newName'], 'String');
        }
        if (data.hasOwnProperty('oldDescription')) {
          obj['oldDescription'] = _ApiClient2.default.convertToType(data['oldDescription'], 'String');
        }
        if (data.hasOwnProperty('newDescription')) {
          obj['newDescription'] = _ApiClient2.default.convertToType(data['newDescription'], 'String');
        }
        if (data.hasOwnProperty('oldIsPrivate')) {
          obj['oldIsPrivate'] = _ApiClient2.default.convertToType(data['oldIsPrivate'], 'Boolean');
        }
        if (data.hasOwnProperty('newIsPrivate')) {
          obj['newIsPrivate'] = _ApiClient2.default.convertToType(data['newIsPrivate'], 'Boolean');
        }
        if (data.hasOwnProperty('oldDocumentLineageUrns')) {
          obj['oldDocumentLineageUrns'] = _ApiClient2.default.convertToType(data['oldDocumentLineageUrns'], ['String']);
        }
        if (data.hasOwnProperty('newDocumentLineageUrns')) {
          obj['newDocumentLineageUrns'] = _ApiClient2.default.convertToType(data['newDocumentLineageUrns'], ['String']);
        }
        if (data.hasOwnProperty('oldScreenshotId')) {
          obj['oldScreenshotId'] = _ApiClient2.default.convertToType(data['oldScreenshotId'], 'String');
        }
        if (data.hasOwnProperty('newScreenshotId')) {
          obj['newScreenshotId'] = _ApiClient2.default.convertToType(data['newScreenshotId'], 'String');
        }
      }
      return obj;
    }
  }]);

  return UpdateModelSetView;
}();

/**
 * The view display name
 * @member {String} oldName
 */


UpdateModelSetView.prototype['oldName'] = undefined;

/**
 * The view display name
 * @member {String} newName
 */
UpdateModelSetView.prototype['newName'] = undefined;

/**
 * The view description
 * @member {String} oldDescription
 */
UpdateModelSetView.prototype['oldDescription'] = undefined;

/**
 * The view description
 * @member {String} newDescription
 */
UpdateModelSetView.prototype['newDescription'] = undefined;

/**
 * The view is only accessible to its creator
 * @member {Boolean} oldIsPrivate
 */
UpdateModelSetView.prototype['oldIsPrivate'] = undefined;

/**
 * The view is only accessible to its creator
 * @member {Boolean} newIsPrivate
 */
UpdateModelSetView.prototype['newIsPrivate'] = undefined;

/**
 * The list of document lineage URNs
 * @member {Array.<String>} oldDocumentLineageUrns
 */
UpdateModelSetView.prototype['oldDocumentLineageUrns'] = undefined;

/**
 * The list of document lineage URNs
 * @member {Array.<String>} newDocumentLineageUrns
 */
UpdateModelSetView.prototype['newDocumentLineageUrns'] = undefined;

/**
 * A view screenshot Id
 * @member {String} oldScreenshotId
 */
UpdateModelSetView.prototype['oldScreenshotId'] = undefined;

/**
 * A view screenshot Id
 * @member {String} newScreenshotId
 */
UpdateModelSetView.prototype['newScreenshotId'] = undefined;

exports.default = UpdateModelSetView;
//# sourceMappingURL=UpdateModelSetView.js.map