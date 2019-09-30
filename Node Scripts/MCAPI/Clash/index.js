'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestsApi = exports.SystemApi = exports.ScreenShotsApi = exports.ClosedApi = exports.AssignedApi = exports.ValidationError = exports.SortDirection = exports.ScreenshotToken = exports.ResourceError = exports.PushpinLocation = exports.Pushpin = exports.NewClosedClashGroup = exports.NewAssignedClashGroup = exports.Job = exports.CustomAttribute = exports.CollectionPage = exports.ClosedClashGroupCollection = exports.ClosedClashGroupClashData = exports.ClosedClashGroup = exports.CloseReason = exports.ClashTestSummaryCollection = exports.ClashTestSummary = exports.ClashTestResourceCollection = exports.ClashTestResource = exports.ClashTest = exports.ClashGroupJob = exports.ClashGroupClashIntersectionCollection = exports.ClashGroupClashIntersection = exports.ClashGroupClashDataDocuments = exports.ClashGroupClashDataClashes = exports.ClashGroupClashDataClashInstances = exports.ClashGroupClashData = exports.BasicError = exports.AssignedClashGroupCollection = exports.AssignedClashGroupClashData = exports.AssignedClashGroup = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AssignedClashGroup = require('./model/AssignedClashGroup');

var _AssignedClashGroup2 = _interopRequireDefault(_AssignedClashGroup);

var _AssignedClashGroupClashData = require('./model/AssignedClashGroupClashData');

var _AssignedClashGroupClashData2 = _interopRequireDefault(_AssignedClashGroupClashData);

var _AssignedClashGroupCollection = require('./model/AssignedClashGroupCollection');

var _AssignedClashGroupCollection2 = _interopRequireDefault(_AssignedClashGroupCollection);

var _BasicError = require('./model/BasicError');

var _BasicError2 = _interopRequireDefault(_BasicError);

var _ClashGroupClashData = require('./model/ClashGroupClashData');

var _ClashGroupClashData2 = _interopRequireDefault(_ClashGroupClashData);

var _ClashGroupClashDataClashInstances = require('./model/ClashGroupClashDataClashInstances');

var _ClashGroupClashDataClashInstances2 = _interopRequireDefault(_ClashGroupClashDataClashInstances);

var _ClashGroupClashDataClashes = require('./model/ClashGroupClashDataClashes');

var _ClashGroupClashDataClashes2 = _interopRequireDefault(_ClashGroupClashDataClashes);

var _ClashGroupClashDataDocuments = require('./model/ClashGroupClashDataDocuments');

var _ClashGroupClashDataDocuments2 = _interopRequireDefault(_ClashGroupClashDataDocuments);

var _ClashGroupClashIntersection = require('./model/ClashGroupClashIntersection');

var _ClashGroupClashIntersection2 = _interopRequireDefault(_ClashGroupClashIntersection);

var _ClashGroupClashIntersectionCollection = require('./model/ClashGroupClashIntersectionCollection');

var _ClashGroupClashIntersectionCollection2 = _interopRequireDefault(_ClashGroupClashIntersectionCollection);

var _ClashGroupJob = require('./model/ClashGroupJob');

var _ClashGroupJob2 = _interopRequireDefault(_ClashGroupJob);

var _ClashTest = require('./model/ClashTest');

var _ClashTest2 = _interopRequireDefault(_ClashTest);

var _ClashTestResource = require('./model/ClashTestResource');

var _ClashTestResource2 = _interopRequireDefault(_ClashTestResource);

var _ClashTestResourceCollection = require('./model/ClashTestResourceCollection');

var _ClashTestResourceCollection2 = _interopRequireDefault(_ClashTestResourceCollection);

var _ClashTestSummary = require('./model/ClashTestSummary');

var _ClashTestSummary2 = _interopRequireDefault(_ClashTestSummary);

var _ClashTestSummaryCollection = require('./model/ClashTestSummaryCollection');

var _ClashTestSummaryCollection2 = _interopRequireDefault(_ClashTestSummaryCollection);

var _CloseReason = require('./model/CloseReason');

var _CloseReason2 = _interopRequireDefault(_CloseReason);

var _ClosedClashGroup = require('./model/ClosedClashGroup');

var _ClosedClashGroup2 = _interopRequireDefault(_ClosedClashGroup);

var _ClosedClashGroupClashData = require('./model/ClosedClashGroupClashData');

var _ClosedClashGroupClashData2 = _interopRequireDefault(_ClosedClashGroupClashData);

var _ClosedClashGroupCollection = require('./model/ClosedClashGroupCollection');

var _ClosedClashGroupCollection2 = _interopRequireDefault(_ClosedClashGroupCollection);

var _CollectionPage = require('./model/CollectionPage');

var _CollectionPage2 = _interopRequireDefault(_CollectionPage);

var _CustomAttribute = require('./model/CustomAttribute');

var _CustomAttribute2 = _interopRequireDefault(_CustomAttribute);

var _Job = require('./model/Job');

var _Job2 = _interopRequireDefault(_Job);

var _NewAssignedClashGroup = require('./model/NewAssignedClashGroup');

var _NewAssignedClashGroup2 = _interopRequireDefault(_NewAssignedClashGroup);

var _NewClosedClashGroup = require('./model/NewClosedClashGroup');

var _NewClosedClashGroup2 = _interopRequireDefault(_NewClosedClashGroup);

var _Pushpin = require('./model/Pushpin');

var _Pushpin2 = _interopRequireDefault(_Pushpin);

var _PushpinLocation = require('./model/PushpinLocation');

var _PushpinLocation2 = _interopRequireDefault(_PushpinLocation);

var _ResourceError = require('./model/ResourceError');

var _ResourceError2 = _interopRequireDefault(_ResourceError);

var _ScreenshotToken = require('./model/ScreenshotToken');

var _ScreenshotToken2 = _interopRequireDefault(_ScreenshotToken);

var _SortDirection = require('./model/SortDirection');

var _SortDirection2 = _interopRequireDefault(_SortDirection);

var _ValidationError = require('./model/ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _AssignedApi = require('./api/AssignedApi');

var _AssignedApi2 = _interopRequireDefault(_AssignedApi);

var _ClosedApi = require('./api/ClosedApi');

var _ClosedApi2 = _interopRequireDefault(_ClosedApi);

var _ScreenShotsApi = require('./api/ScreenShotsApi');

var _ScreenShotsApi2 = _interopRequireDefault(_ScreenShotsApi);

var _SystemApi = require('./api/SystemApi');

var _SystemApi2 = _interopRequireDefault(_SystemApi);

var _TestsApi = require('./api/TestsApi');

var _TestsApi2 = _interopRequireDefault(_TestsApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var @AdskBim360NucleusClash = require('index'); // See note below*.
* var xxxSvc = new @AdskBim360NucleusClash.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new @AdskBim360NucleusClash.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new @AdskBim360NucleusClash.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new @AdskBim360NucleusClash.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.3.12
*/
exports.ApiClient = _ApiClient2.default;
exports.AssignedClashGroup = _AssignedClashGroup2.default;
exports.AssignedClashGroupClashData = _AssignedClashGroupClashData2.default;
exports.AssignedClashGroupCollection = _AssignedClashGroupCollection2.default;
exports.BasicError = _BasicError2.default;
exports.ClashGroupClashData = _ClashGroupClashData2.default;
exports.ClashGroupClashDataClashInstances = _ClashGroupClashDataClashInstances2.default;
exports.ClashGroupClashDataClashes = _ClashGroupClashDataClashes2.default;
exports.ClashGroupClashDataDocuments = _ClashGroupClashDataDocuments2.default;
exports.ClashGroupClashIntersection = _ClashGroupClashIntersection2.default;
exports.ClashGroupClashIntersectionCollection = _ClashGroupClashIntersectionCollection2.default;
exports.ClashGroupJob = _ClashGroupJob2.default;
exports.ClashTest = _ClashTest2.default;
exports.ClashTestResource = _ClashTestResource2.default;
exports.ClashTestResourceCollection = _ClashTestResourceCollection2.default;
exports.ClashTestSummary = _ClashTestSummary2.default;
exports.ClashTestSummaryCollection = _ClashTestSummaryCollection2.default;
exports.CloseReason = _CloseReason2.default;
exports.ClosedClashGroup = _ClosedClashGroup2.default;
exports.ClosedClashGroupClashData = _ClosedClashGroupClashData2.default;
exports.ClosedClashGroupCollection = _ClosedClashGroupCollection2.default;
exports.CollectionPage = _CollectionPage2.default;
exports.CustomAttribute = _CustomAttribute2.default;
exports.Job = _Job2.default;
exports.NewAssignedClashGroup = _NewAssignedClashGroup2.default;
exports.NewClosedClashGroup = _NewClosedClashGroup2.default;
exports.Pushpin = _Pushpin2.default;
exports.PushpinLocation = _PushpinLocation2.default;
exports.ResourceError = _ResourceError2.default;
exports.ScreenshotToken = _ScreenshotToken2.default;
exports.SortDirection = _SortDirection2.default;
exports.ValidationError = _ValidationError2.default;
exports.AssignedApi = _AssignedApi2.default;
exports.ClosedApi = _ClosedApi2.default;
exports.ScreenShotsApi = _ScreenShotsApi2.default;
exports.SystemApi = _SystemApi2.default;
exports.TestsApi = _TestsApi2.default; /**
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
//# sourceMappingURL=index.js.map