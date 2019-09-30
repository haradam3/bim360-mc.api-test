'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewsApi = exports.SystemApi = exports.IndexApi = exports.ValidationError = exports.NewIndexView = exports.Job = exports.IndexViewJob = exports.IndexViewCollection = exports.IndexView = exports.IndexResource = exports.IndexQueryResources = exports.IndexQuery = exports.IndexManifestSeedFileDocument = exports.IndexManifestSeedFileDatabase = exports.IndexManifestSeedFile = exports.IndexManifest = exports.IndexJob = exports.CollectionPage = exports.BasicError = exports.BaseError = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _BaseError = require('./model/BaseError');

var _BaseError2 = _interopRequireDefault(_BaseError);

var _BasicError = require('./model/BasicError');

var _BasicError2 = _interopRequireDefault(_BasicError);

var _CollectionPage = require('./model/CollectionPage');

var _CollectionPage2 = _interopRequireDefault(_CollectionPage);

var _IndexJob = require('./model/IndexJob');

var _IndexJob2 = _interopRequireDefault(_IndexJob);

var _IndexManifest = require('./model/IndexManifest');

var _IndexManifest2 = _interopRequireDefault(_IndexManifest);

var _IndexManifestSeedFile = require('./model/IndexManifestSeedFile');

var _IndexManifestSeedFile2 = _interopRequireDefault(_IndexManifestSeedFile);

var _IndexManifestSeedFileDatabase = require('./model/IndexManifestSeedFileDatabase');

var _IndexManifestSeedFileDatabase2 = _interopRequireDefault(_IndexManifestSeedFileDatabase);

var _IndexManifestSeedFileDocument = require('./model/IndexManifestSeedFileDocument');

var _IndexManifestSeedFileDocument2 = _interopRequireDefault(_IndexManifestSeedFileDocument);

var _IndexQuery = require('./model/IndexQuery');

var _IndexQuery2 = _interopRequireDefault(_IndexQuery);

var _IndexQueryResources = require('./model/IndexQueryResources');

var _IndexQueryResources2 = _interopRequireDefault(_IndexQueryResources);

var _IndexResource = require('./model/IndexResource');

var _IndexResource2 = _interopRequireDefault(_IndexResource);

var _IndexView = require('./model/IndexView');

var _IndexView2 = _interopRequireDefault(_IndexView);

var _IndexViewCollection = require('./model/IndexViewCollection');

var _IndexViewCollection2 = _interopRequireDefault(_IndexViewCollection);

var _IndexViewJob = require('./model/IndexViewJob');

var _IndexViewJob2 = _interopRequireDefault(_IndexViewJob);

var _Job = require('./model/Job');

var _Job2 = _interopRequireDefault(_Job);

var _NewIndexView = require('./model/NewIndexView');

var _NewIndexView2 = _interopRequireDefault(_NewIndexView);

var _ValidationError = require('./model/ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _IndexApi = require('./api/IndexApi');

var _IndexApi2 = _interopRequireDefault(_IndexApi);

var _SystemApi = require('./api/SystemApi');

var _SystemApi2 = _interopRequireDefault(_SystemApi);

var _ViewsApi = require('./api/ViewsApi');

var _ViewsApi2 = _interopRequireDefault(_ViewsApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* BIM_360_Indexing_Service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var @AdskBim360NucleusIndex = require('index'); // See note below*.
* var xxxSvc = new @AdskBim360NucleusIndex.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new @AdskBim360NucleusIndex.Yyy(); // Construct a model instance.
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
* var xxxSvc = new @AdskBim360NucleusIndex.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new @AdskBim360NucleusIndex.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.2.0
*/
exports.ApiClient = _ApiClient2.default;
exports.BaseError = _BaseError2.default;
exports.BasicError = _BasicError2.default;
exports.CollectionPage = _CollectionPage2.default;
exports.IndexJob = _IndexJob2.default;
exports.IndexManifest = _IndexManifest2.default;
exports.IndexManifestSeedFile = _IndexManifestSeedFile2.default;
exports.IndexManifestSeedFileDatabase = _IndexManifestSeedFileDatabase2.default;
exports.IndexManifestSeedFileDocument = _IndexManifestSeedFileDocument2.default;
exports.IndexQuery = _IndexQuery2.default;
exports.IndexQueryResources = _IndexQueryResources2.default;
exports.IndexResource = _IndexResource2.default;
exports.IndexView = _IndexView2.default;
exports.IndexViewCollection = _IndexViewCollection2.default;
exports.IndexViewJob = _IndexViewJob2.default;
exports.Job = _Job2.default;
exports.NewIndexView = _NewIndexView2.default;
exports.ValidationError = _ValidationError2.default;
exports.IndexApi = _IndexApi2.default;
exports.SystemApi = _SystemApi2.default;
exports.ViewsApi = _ViewsApi2.default; /**
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
//# sourceMappingURL=index.js.map