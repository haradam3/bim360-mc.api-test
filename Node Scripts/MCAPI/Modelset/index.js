'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemApi = exports.ScreenShotsApi = exports.ModelSetsApi = exports.ModelSetViewsApi = exports.ModelSetVersionsApi = exports.ContainersApi = exports.ChannelsApi = exports.ViewSortFields = exports.ViewContext = exports.ValidationError = exports.UpdateModelSetView = exports.SortDirection = exports.ScreenshotToken = exports.ResourceError = exports.PushpinLocation = exports.Pushpin = exports.NewModelSetView = exports.NewModelSetName = exports.NewModelSetIssue = exports.NewModelSet = exports.NewContainer = exports.ModelSetViewVersionCollection = exports.ModelSetViewVersion = exports.ModelSetViewSummary = exports.ModelSetViewJob = exports.ModelSetViewCollection = exports.ModelSetView = exports.ModelSetVersionSummaryCollection = exports.ModelSetVersionSummary = exports.ModelSetVersion = exports.ModelSetSummaryCollection = exports.ModelSetSummary = exports.ModelSetPermissionCollection = exports.ModelSetJob = exports.ModelSetFolder = exports.ModelSetDocumentVersion = exports.ModelSetDocumentStatus = exports.ModelSetDocumentLineage = exports.ModelSetActions = exports.ModelSetActionType = exports.ModelSet = exports.Job = exports.FolderReference = exports.CustomAttribute = exports.ContextValue = exports.ContainerRegion = exports.ContainerJob = exports.Container = exports.CollectionPage = exports.Channel = exports.BasicError = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _BasicError = require('./model/BasicError');

var _BasicError2 = _interopRequireDefault(_BasicError);

var _Channel = require('./model/Channel');

var _Channel2 = _interopRequireDefault(_Channel);

var _CollectionPage = require('./model/CollectionPage');

var _CollectionPage2 = _interopRequireDefault(_CollectionPage);

var _Container = require('./model/Container');

var _Container2 = _interopRequireDefault(_Container);

var _ContainerJob = require('./model/ContainerJob');

var _ContainerJob2 = _interopRequireDefault(_ContainerJob);

var _ContainerRegion = require('./model/ContainerRegion');

var _ContainerRegion2 = _interopRequireDefault(_ContainerRegion);

var _ContextValue = require('./model/ContextValue');

var _ContextValue2 = _interopRequireDefault(_ContextValue);

var _CustomAttribute = require('./model/CustomAttribute');

var _CustomAttribute2 = _interopRequireDefault(_CustomAttribute);

var _FolderReference = require('./model/FolderReference');

var _FolderReference2 = _interopRequireDefault(_FolderReference);

var _Job = require('./model/Job');

var _Job2 = _interopRequireDefault(_Job);

var _ModelSet = require('./model/ModelSet');

var _ModelSet2 = _interopRequireDefault(_ModelSet);

var _ModelSetActionType = require('./model/ModelSetActionType');

var _ModelSetActionType2 = _interopRequireDefault(_ModelSetActionType);

var _ModelSetActions = require('./model/ModelSetActions');

var _ModelSetActions2 = _interopRequireDefault(_ModelSetActions);

var _ModelSetDocumentLineage = require('./model/ModelSetDocumentLineage');

var _ModelSetDocumentLineage2 = _interopRequireDefault(_ModelSetDocumentLineage);

var _ModelSetDocumentStatus = require('./model/ModelSetDocumentStatus');

var _ModelSetDocumentStatus2 = _interopRequireDefault(_ModelSetDocumentStatus);

var _ModelSetDocumentVersion = require('./model/ModelSetDocumentVersion');

var _ModelSetDocumentVersion2 = _interopRequireDefault(_ModelSetDocumentVersion);

var _ModelSetFolder = require('./model/ModelSetFolder');

var _ModelSetFolder2 = _interopRequireDefault(_ModelSetFolder);

var _ModelSetJob = require('./model/ModelSetJob');

var _ModelSetJob2 = _interopRequireDefault(_ModelSetJob);

var _ModelSetPermissionCollection = require('./model/ModelSetPermissionCollection');

var _ModelSetPermissionCollection2 = _interopRequireDefault(_ModelSetPermissionCollection);

var _ModelSetSummary = require('./model/ModelSetSummary');

var _ModelSetSummary2 = _interopRequireDefault(_ModelSetSummary);

var _ModelSetSummaryCollection = require('./model/ModelSetSummaryCollection');

var _ModelSetSummaryCollection2 = _interopRequireDefault(_ModelSetSummaryCollection);

var _ModelSetVersion = require('./model/ModelSetVersion');

var _ModelSetVersion2 = _interopRequireDefault(_ModelSetVersion);

var _ModelSetVersionSummary = require('./model/ModelSetVersionSummary');

var _ModelSetVersionSummary2 = _interopRequireDefault(_ModelSetVersionSummary);

var _ModelSetVersionSummaryCollection = require('./model/ModelSetVersionSummaryCollection');

var _ModelSetVersionSummaryCollection2 = _interopRequireDefault(_ModelSetVersionSummaryCollection);

var _ModelSetView = require('./model/ModelSetView');

var _ModelSetView2 = _interopRequireDefault(_ModelSetView);

var _ModelSetViewCollection = require('./model/ModelSetViewCollection');

var _ModelSetViewCollection2 = _interopRequireDefault(_ModelSetViewCollection);

var _ModelSetViewJob = require('./model/ModelSetViewJob');

var _ModelSetViewJob2 = _interopRequireDefault(_ModelSetViewJob);

var _ModelSetViewSummary = require('./model/ModelSetViewSummary');

var _ModelSetViewSummary2 = _interopRequireDefault(_ModelSetViewSummary);

var _ModelSetViewVersion = require('./model/ModelSetViewVersion');

var _ModelSetViewVersion2 = _interopRequireDefault(_ModelSetViewVersion);

var _ModelSetViewVersionCollection = require('./model/ModelSetViewVersionCollection');

var _ModelSetViewVersionCollection2 = _interopRequireDefault(_ModelSetViewVersionCollection);

var _NewContainer = require('./model/NewContainer');

var _NewContainer2 = _interopRequireDefault(_NewContainer);

var _NewModelSet = require('./model/NewModelSet');

var _NewModelSet2 = _interopRequireDefault(_NewModelSet);

var _NewModelSetIssue = require('./model/NewModelSetIssue');

var _NewModelSetIssue2 = _interopRequireDefault(_NewModelSetIssue);

var _NewModelSetName = require('./model/NewModelSetName');

var _NewModelSetName2 = _interopRequireDefault(_NewModelSetName);

var _NewModelSetView = require('./model/NewModelSetView');

var _NewModelSetView2 = _interopRequireDefault(_NewModelSetView);

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

var _UpdateModelSetView = require('./model/UpdateModelSetView');

var _UpdateModelSetView2 = _interopRequireDefault(_UpdateModelSetView);

var _ValidationError = require('./model/ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _ViewContext = require('./model/ViewContext');

var _ViewContext2 = _interopRequireDefault(_ViewContext);

var _ViewSortFields = require('./model/ViewSortFields');

var _ViewSortFields2 = _interopRequireDefault(_ViewSortFields);

var _ChannelsApi = require('./api/ChannelsApi');

var _ChannelsApi2 = _interopRequireDefault(_ChannelsApi);

var _ContainersApi = require('./api/ContainersApi');

var _ContainersApi2 = _interopRequireDefault(_ContainersApi);

var _ModelSetVersionsApi = require('./api/ModelSetVersionsApi');

var _ModelSetVersionsApi2 = _interopRequireDefault(_ModelSetVersionsApi);

var _ModelSetViewsApi = require('./api/ModelSetViewsApi');

var _ModelSetViewsApi2 = _interopRequireDefault(_ModelSetViewsApi);

var _ModelSetsApi = require('./api/ModelSetsApi');

var _ModelSetsApi2 = _interopRequireDefault(_ModelSetsApi);

var _ScreenShotsApi = require('./api/ScreenShotsApi');

var _ScreenShotsApi2 = _interopRequireDefault(_ScreenShotsApi);

var _SystemApi = require('./api/SystemApi');

var _SystemApi2 = _interopRequireDefault(_SystemApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* This_API_is_for_creating_and_managing_Containers_and_Model_Sets__A_Container_in_is_first_and_foremost_a_data_partition__This_partition_can_be_aligned_with_any_external_logical_data_partitioning_e_g__an_Account_or_Project__In_this_respect_Containers_are_completely_synonymous_with_the_HQ_BIM_360_Docs_Container_concept__Containers_are_used_to_organise__amongst_other_things_Model_Sets_A_Model_Set_is_defined_as_a_set_of_BIM_360_Docs_Folders_along_with_an_optional_set_of_Folder_Model_Lineage_Filters__Once_created_Model_Set_Versions_will_automatically_be_generated_for_enabled_Model_Sets__Model_Set_Versions_are_automatically_created_in_the_background_in_response_to_changes_in_the_BIM_360_Docs_CMS__The_availability_of_new_Model_Set_Versions_will_also_result_in_further_automated_downstream_processing_of_Model_Set_Versions_e_g__clash_testing__Async_POST_PATCH_PUT_and_DELETEThis_is_an_asynchronous_API_with_respect_to_endpoints_which_perform_POST_PATCH_PUT_or_DELETE_operations__These_endpoints_all_follow_a_standard_implementation_patter_whereby_calls_onto_a_POST_PATCH_PUT_or_DELETE_resource_endpoint_will_all_result_in_an_HTTP_202__Accepted_response_which_returns_the_ID_of_the_job_associated_with_the_operation__These_IDs_can_be_used_to_poll_the_job_endpoint_associated_with_each_resource_collection_to_track_the_progress_of_the_operation_started_by_the_associated_POST_PATCH_PUT_or_DELETE_operation__The_following_HTTP_status_conventions_will_be_adopted_by_endpoints_in_this_API_unless_otherwise_stated__Bad_RequestHTTP_400_Bad_Request_will_be_used_to_indicate_that_the_request_is_invalid_due_to_bad_input_data_received_either_in_a_path_variable_or_request_body__Unless_otherwise_stated_a_400_response_will_be_accompanied_by_a_Resource_Error_model_payload__ForbiddenHTTP_403_Forbidden_will_be_used_that_the_caller_does_not_have_permission_to_access_or_perform_an_operation_on_the_resource_s_associated_with_the_request__Likewise_if_a_caller_is_attempting_to_create_a_resource_and_they_do_not_have_permission_to_do_so_403_Forbidden_will_be_returned__Not_FoundHTTP_404_Not_Found_will_be_used_to_indicate_that_the_resource_the_caller_is_attempting_to_accessmanipulate_does_not_exist_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var @AdskBim360NucleusScopes = require('index'); // See note below*.
* var xxxSvc = new @AdskBim360NucleusScopes.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new @AdskBim360NucleusScopes.Yyy(); // Construct a model instance.
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
* var xxxSvc = new @AdskBim360NucleusScopes.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new @AdskBim360NucleusScopes.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0.39
*/
/**
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

exports.ApiClient = _ApiClient2.default;
exports.BasicError = _BasicError2.default;
exports.Channel = _Channel2.default;
exports.CollectionPage = _CollectionPage2.default;
exports.Container = _Container2.default;
exports.ContainerJob = _ContainerJob2.default;
exports.ContainerRegion = _ContainerRegion2.default;
exports.ContextValue = _ContextValue2.default;
exports.CustomAttribute = _CustomAttribute2.default;
exports.FolderReference = _FolderReference2.default;
exports.Job = _Job2.default;
exports.ModelSet = _ModelSet2.default;
exports.ModelSetActionType = _ModelSetActionType2.default;
exports.ModelSetActions = _ModelSetActions2.default;
exports.ModelSetDocumentLineage = _ModelSetDocumentLineage2.default;
exports.ModelSetDocumentStatus = _ModelSetDocumentStatus2.default;
exports.ModelSetDocumentVersion = _ModelSetDocumentVersion2.default;
exports.ModelSetFolder = _ModelSetFolder2.default;
exports.ModelSetJob = _ModelSetJob2.default;
exports.ModelSetPermissionCollection = _ModelSetPermissionCollection2.default;
exports.ModelSetSummary = _ModelSetSummary2.default;
exports.ModelSetSummaryCollection = _ModelSetSummaryCollection2.default;
exports.ModelSetVersion = _ModelSetVersion2.default;
exports.ModelSetVersionSummary = _ModelSetVersionSummary2.default;
exports.ModelSetVersionSummaryCollection = _ModelSetVersionSummaryCollection2.default;
exports.ModelSetView = _ModelSetView2.default;
exports.ModelSetViewCollection = _ModelSetViewCollection2.default;
exports.ModelSetViewJob = _ModelSetViewJob2.default;
exports.ModelSetViewSummary = _ModelSetViewSummary2.default;
exports.ModelSetViewVersion = _ModelSetViewVersion2.default;
exports.ModelSetViewVersionCollection = _ModelSetViewVersionCollection2.default;
exports.NewContainer = _NewContainer2.default;
exports.NewModelSet = _NewModelSet2.default;
exports.NewModelSetIssue = _NewModelSetIssue2.default;
exports.NewModelSetName = _NewModelSetName2.default;
exports.NewModelSetView = _NewModelSetView2.default;
exports.Pushpin = _Pushpin2.default;
exports.PushpinLocation = _PushpinLocation2.default;
exports.ResourceError = _ResourceError2.default;
exports.ScreenshotToken = _ScreenshotToken2.default;
exports.SortDirection = _SortDirection2.default;
exports.UpdateModelSetView = _UpdateModelSetView2.default;
exports.ValidationError = _ValidationError2.default;
exports.ViewContext = _ViewContext2.default;
exports.ViewSortFields = _ViewSortFields2.default;
exports.ChannelsApi = _ChannelsApi2.default;
exports.ContainersApi = _ContainersApi2.default;
exports.ModelSetVersionsApi = _ModelSetVersionsApi2.default;
exports.ModelSetViewsApi = _ModelSetViewsApi2.default;
exports.ModelSetsApi = _ModelSetsApi2.default;
exports.ScreenShotsApi = _ScreenShotsApi2.default;
exports.SystemApi = _SystemApi2.default;
//# sourceMappingURL=index.js.map