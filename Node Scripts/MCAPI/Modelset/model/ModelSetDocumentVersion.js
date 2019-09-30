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

var _ModelSetDocumentLineage = require('./ModelSetDocumentLineage');

var _ModelSetDocumentLineage2 = _interopRequireDefault(_ModelSetDocumentLineage);

var _ModelSetDocumentStatus = require('./ModelSetDocumentStatus');

var _ModelSetDocumentStatus2 = _interopRequireDefault(_ModelSetDocumentStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ModelSetDocumentVersion model module.
 * @module model/ModelSetDocumentVersion
 * @version 3.0.39
 */
var ModelSetDocumentVersion = function () {
  /**
   * Constructs a new <code>ModelSetDocumentVersion</code>.
   * A model set document version with associated lineage information.
   * @alias module:model/ModelSetDocumentVersion
   * @param documentLineage {module:model/ModelSetDocumentLineage} 
   * @param documentStatus {module:model/ModelSetDocumentStatus} 
   * @param versionUrn {String} The URN of this document version.
   * @param displayName {String} The display name of the document version.
   * @param createUserId {String} The ID of the user who created this document version.
   * @param createTime {Date} The date and time this document version was created.
   * @param viewableGuid {String} The GUID of the viewable for this document version.
   * @param viewableId {String} The ID of the viewable for this document version.
   * @param viewableMime {String} The mime type of the viewable for this document version.
   * @param bubbleUrn {String} The URN of the Derivative Service bubble for this document version.
   * @param originalSeedFileVersionUrn {String} The seed file version URN this document was originally extracted from.
   */
  function ModelSetDocumentVersion(documentLineage, documentStatus, versionUrn, displayName, createUserId, createTime, viewableGuid, viewableId, viewableMime, bubbleUrn, originalSeedFileVersionUrn) {
    _classCallCheck(this, ModelSetDocumentVersion);

    ModelSetDocumentVersion.initialize(this, documentLineage, documentStatus, versionUrn, displayName, createUserId, createTime, viewableGuid, viewableId, viewableMime, bubbleUrn, originalSeedFileVersionUrn);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelSetDocumentVersion, null, [{
    key: 'initialize',
    value: function initialize(obj, documentLineage, documentStatus, versionUrn, displayName, createUserId, createTime, viewableGuid, viewableId, viewableMime, bubbleUrn, originalSeedFileVersionUrn) {
      obj['documentLineage'] = documentLineage;
      obj['documentStatus'] = documentStatus;
      obj['versionUrn'] = versionUrn;
      obj['displayName'] = displayName;
      obj['createUserId'] = createUserId;
      obj['createTime'] = createTime;
      obj['viewableGuid'] = viewableGuid;
      obj['viewableId'] = viewableId;
      obj['viewableMime'] = viewableMime;
      obj['bubbleUrn'] = bubbleUrn;
      obj['originalSeedFileVersionUrn'] = originalSeedFileVersionUrn;
    }

    /**
     * Constructs a <code>ModelSetDocumentVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelSetDocumentVersion} obj Optional instance to populate.
     * @return {module:model/ModelSetDocumentVersion} The populated <code>ModelSetDocumentVersion</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelSetDocumentVersion();

        if (data.hasOwnProperty('documentLineage')) {
          obj['documentLineage'] = _ModelSetDocumentLineage2.default.constructFromObject(data['documentLineage']);
        }
        if (data.hasOwnProperty('documentStatus')) {
          obj['documentStatus'] = _ModelSetDocumentStatus2.default.constructFromObject(data['documentStatus']);
        }
        if (data.hasOwnProperty('versionUrn')) {
          obj['versionUrn'] = _ApiClient2.default.convertToType(data['versionUrn'], 'String');
        }
        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient2.default.convertToType(data['displayName'], 'String');
        }
        if (data.hasOwnProperty('createUserId')) {
          obj['createUserId'] = _ApiClient2.default.convertToType(data['createUserId'], 'String');
        }
        if (data.hasOwnProperty('createTime')) {
          obj['createTime'] = _ApiClient2.default.convertToType(data['createTime'], 'Date');
        }
        if (data.hasOwnProperty('viewableGuid')) {
          obj['viewableGuid'] = _ApiClient2.default.convertToType(data['viewableGuid'], 'String');
        }
        if (data.hasOwnProperty('viewableId')) {
          obj['viewableId'] = _ApiClient2.default.convertToType(data['viewableId'], 'String');
        }
        if (data.hasOwnProperty('viewableMime')) {
          obj['viewableMime'] = _ApiClient2.default.convertToType(data['viewableMime'], 'String');
        }
        if (data.hasOwnProperty('bubbleUrn')) {
          obj['bubbleUrn'] = _ApiClient2.default.convertToType(data['bubbleUrn'], 'String');
        }
        if (data.hasOwnProperty('originalSeedFileVersionUrn')) {
          obj['originalSeedFileVersionUrn'] = _ApiClient2.default.convertToType(data['originalSeedFileVersionUrn'], 'String');
        }
      }
      return obj;
    }
  }]);

  return ModelSetDocumentVersion;
}();

/**
 * @member {module:model/ModelSetDocumentLineage} documentLineage
 */


ModelSetDocumentVersion.prototype['documentLineage'] = undefined;

/**
 * @member {module:model/ModelSetDocumentStatus} documentStatus
 */
ModelSetDocumentVersion.prototype['documentStatus'] = undefined;

/**
 * The URN of this document version.
 * @member {String} versionUrn
 */
ModelSetDocumentVersion.prototype['versionUrn'] = undefined;

/**
 * The display name of the document version.
 * @member {String} displayName
 */
ModelSetDocumentVersion.prototype['displayName'] = undefined;

/**
 * The ID of the user who created this document version.
 * @member {String} createUserId
 */
ModelSetDocumentVersion.prototype['createUserId'] = undefined;

/**
 * The date and time this document version was created.
 * @member {Date} createTime
 */
ModelSetDocumentVersion.prototype['createTime'] = undefined;

/**
 * The GUID of the viewable for this document version.
 * @member {String} viewableGuid
 */
ModelSetDocumentVersion.prototype['viewableGuid'] = undefined;

/**
 * The ID of the viewable for this document version.
 * @member {String} viewableId
 */
ModelSetDocumentVersion.prototype['viewableId'] = undefined;

/**
 * The mime type of the viewable for this document version.
 * @member {String} viewableMime
 */
ModelSetDocumentVersion.prototype['viewableMime'] = undefined;

/**
 * The URN of the Derivative Service bubble for this document version.
 * @member {String} bubbleUrn
 */
ModelSetDocumentVersion.prototype['bubbleUrn'] = undefined;

/**
 * The seed file version URN this document was originally extracted from.
 * @member {String} originalSeedFileVersionUrn
 */
ModelSetDocumentVersion.prototype['originalSeedFileVersionUrn'] = undefined;

exports.default = ModelSetDocumentVersion;
//# sourceMappingURL=ModelSetDocumentVersion.js.map