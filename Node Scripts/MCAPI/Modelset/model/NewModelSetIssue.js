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

var _CustomAttribute = require('./CustomAttribute');

var _CustomAttribute2 = _interopRequireDefault(_CustomAttribute);

var _Pushpin = require('./Pushpin');

var _Pushpin2 = _interopRequireDefault(_Pushpin);

var _ViewContext = require('./ViewContext');

var _ViewContext2 = _interopRequireDefault(_ViewContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The NewModelSetIssue model module.
 * @module model/NewModelSetIssue
 * @version 3.0.39
 */
var NewModelSetIssue = function () {
  /**
   * Constructs a new <code>NewModelSetIssue</code>.
   * A new model set issue
   * @alias module:model/NewModelSetIssue
   * @param title {String} 
   * @param documentLineageUrn {String} 
   * @param documentVersion {Number} 
   * @param assignedTo {String} 
   * @param pushpin {module:model/Pushpin} 
   * @param issueTypeId {String} 
   * @param issueSubTypeId {String} 
   * @param viewContext {module:model/ViewContext} 
   */
  function NewModelSetIssue(title, documentLineageUrn, documentVersion, assignedTo, pushpin, issueTypeId, issueSubTypeId, viewContext) {
    _classCallCheck(this, NewModelSetIssue);

    NewModelSetIssue.initialize(this, title, documentLineageUrn, documentVersion, assignedTo, pushpin, issueTypeId, issueSubTypeId, viewContext);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewModelSetIssue, null, [{
    key: 'initialize',
    value: function initialize(obj, title, documentLineageUrn, documentVersion, assignedTo, pushpin, issueTypeId, issueSubTypeId, viewContext) {
      obj['title'] = title;
      obj['documentLineageUrn'] = documentLineageUrn;
      obj['documentVersion'] = documentVersion;
      obj['assignedTo'] = assignedTo;
      obj['pushpin'] = pushpin;
      obj['issueTypeId'] = issueTypeId;
      obj['issueSubTypeId'] = issueSubTypeId;
      obj['viewContext'] = viewContext;
    }

    /**
     * Constructs a <code>NewModelSetIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewModelSetIssue} obj Optional instance to populate.
     * @return {module:model/NewModelSetIssue} The populated <code>NewModelSetIssue</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewModelSetIssue();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('documentLineageUrn')) {
          obj['documentLineageUrn'] = _ApiClient2.default.convertToType(data['documentLineageUrn'], 'String');
        }
        if (data.hasOwnProperty('documentVersion')) {
          obj['documentVersion'] = _ApiClient2.default.convertToType(data['documentVersion'], 'Number');
        }
        if (data.hasOwnProperty('assignedTo')) {
          obj['assignedTo'] = _ApiClient2.default.convertToType(data['assignedTo'], 'String');
        }
        if (data.hasOwnProperty('assignedToType')) {
          obj['assignedToType'] = _ApiClient2.default.convertToType(data['assignedToType'], 'String');
        }
        if (data.hasOwnProperty('dueDate')) {
          obj['dueDate'] = _ApiClient2.default.convertToType(data['dueDate'], 'Date');
        }
        if (data.hasOwnProperty('pushpin')) {
          obj['pushpin'] = _Pushpin2.default.constructFromObject(data['pushpin']);
        }
        if (data.hasOwnProperty('issueTypeId')) {
          obj['issueTypeId'] = _ApiClient2.default.convertToType(data['issueTypeId'], 'String');
        }
        if (data.hasOwnProperty('issueSubTypeId')) {
          obj['issueSubTypeId'] = _ApiClient2.default.convertToType(data['issueSubTypeId'], 'String');
        }
        if (data.hasOwnProperty('rootCauseId')) {
          obj['rootCauseId'] = _ApiClient2.default.convertToType(data['rootCauseId'], 'String');
        }
        if (data.hasOwnProperty('customAttributes')) {
          obj['customAttributes'] = _ApiClient2.default.convertToType(data['customAttributes'], [_CustomAttribute2.default]);
        }
        if (data.hasOwnProperty('screenShots')) {
          obj['screenShots'] = _ApiClient2.default.convertToType(data['screenShots'], ['String']);
        }
        if (data.hasOwnProperty('viewContext')) {
          obj['viewContext'] = _ViewContext2.default.constructFromObject(data['viewContext']);
        }
      }
      return obj;
    }
  }]);

  return NewModelSetIssue;
}();

/**
 * @member {String} title
 */


NewModelSetIssue.prototype['title'] = undefined;

/**
 * @member {String} description
 */
NewModelSetIssue.prototype['description'] = undefined;

/**
 * @member {String} documentLineageUrn
 */
NewModelSetIssue.prototype['documentLineageUrn'] = undefined;

/**
 * @member {Number} documentVersion
 */
NewModelSetIssue.prototype['documentVersion'] = undefined;

/**
 * @member {String} assignedTo
 */
NewModelSetIssue.prototype['assignedTo'] = undefined;

/**
 * @member {module:model/NewModelSetIssue.AssignedToTypeEnum} assignedToType
 * @default 'User'
 */
NewModelSetIssue.prototype['assignedToType'] = 'User';

/**
 * @member {Date} dueDate
 */
NewModelSetIssue.prototype['dueDate'] = undefined;

/**
 * @member {module:model/Pushpin} pushpin
 */
NewModelSetIssue.prototype['pushpin'] = undefined;

/**
 * @member {String} issueTypeId
 */
NewModelSetIssue.prototype['issueTypeId'] = undefined;

/**
 * @member {String} issueSubTypeId
 */
NewModelSetIssue.prototype['issueSubTypeId'] = undefined;

/**
 * @member {String} rootCauseId
 */
NewModelSetIssue.prototype['rootCauseId'] = undefined;

/**
 * @member {Array.<module:model/CustomAttribute>} customAttributes
 */
NewModelSetIssue.prototype['customAttributes'] = undefined;

/**
 * @member {Array.<String>} screenShots
 */
NewModelSetIssue.prototype['screenShots'] = undefined;

/**
 * @member {module:model/ViewContext} viewContext
 */
NewModelSetIssue.prototype['viewContext'] = undefined;

/**
 * Allowed values for the <code>assignedToType</code> property.
 * @enum {String}
 * @readonly
 */
NewModelSetIssue['AssignedToTypeEnum'] = {

  /**
   * value: "User"
   * @const
   */
  "User": "User",

  /**
   * value: "Role"
   * @const
   */
  "Role": "Role",

  /**
   * value: "Company"
   * @const
   */
  "Company": "Company"
};

exports.default = NewModelSetIssue;
//# sourceMappingURL=NewModelSetIssue.js.map