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
 * The FolderReference model module.
 * @module model/FolderReference
 * @version 3.0.39
 */
var FolderReference = function () {
  /**
   * Constructs a new <code>FolderReference</code>.
   * A BIM 360 Folder reference.
   * @alias module:model/FolderReference
   * @param source {String} A source domain for the event e.g. bim360docs, nucleustest etc...
   * @param urn {String} The WIP URN of the folder which has changed
   * @param changedOn {Date} The date time at source when the changed occurred
   */
  function FolderReference(source, urn, changedOn) {
    _classCallCheck(this, FolderReference);

    FolderReference.initialize(this, source, urn, changedOn);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FolderReference, null, [{
    key: 'initialize',
    value: function initialize(obj, source, urn, changedOn) {
      obj['source'] = source;
      obj['urn'] = urn;
      obj['changedOn'] = changedOn;
    }

    /**
     * Constructs a <code>FolderReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderReference} obj Optional instance to populate.
     * @return {module:model/FolderReference} The populated <code>FolderReference</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FolderReference();

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient2.default.convertToType(data['source'], 'String');
        }
        if (data.hasOwnProperty('urn')) {
          obj['urn'] = _ApiClient2.default.convertToType(data['urn'], 'String');
        }
        if (data.hasOwnProperty('changedOn')) {
          obj['changedOn'] = _ApiClient2.default.convertToType(data['changedOn'], 'Date');
        }
      }
      return obj;
    }
  }]);

  return FolderReference;
}();

/**
 * A source domain for the event e.g. bim360docs, nucleustest etc...
 * @member {String} source
 */


FolderReference.prototype['source'] = undefined;

/**
 * The WIP URN of the folder which has changed
 * @member {String} urn
 */
FolderReference.prototype['urn'] = undefined;

/**
 * The date time at source when the changed occurred
 * @member {Date} changedOn
 */
FolderReference.prototype['changedOn'] = undefined;

exports.default = FolderReference;
//# sourceMappingURL=FolderReference.js.map