# EdenAiApiDocumentation.AutoMLTextDataApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autoMLTextDataDelete**](AutoMLTextDataApi.md#autoMLTextDataDelete) | **DELETE** /automl/text/project/{project_id}/train/{train_id} | 
[**autoMLTextDataLaunchPrediction**](AutoMLTextDataApi.md#autoMLTextDataLaunchPrediction) | **POST** /automl/text/project/{project_id}/train/{train_id}/prediction | 
[**autoMLTextDataPredictionDetail**](AutoMLTextDataApi.md#autoMLTextDataPredictionDetail) | **GET** /automl/text/project/{project_id}/train/{train_id}/prediction/{predict_id} | 
[**autoMLTextDataPredictionResults**](AutoMLTextDataApi.md#autoMLTextDataPredictionResults) | **GET** /automl/text/project/{project_id}/train/{train_id}/prediction/{predict_id}/results | 
[**autoMLTextDataTrain**](AutoMLTextDataApi.md#autoMLTextDataTrain) | **POST** /automl/text/project/{project_id}/train | 
[**autoMLTextDataTrainDetail**](AutoMLTextDataApi.md#autoMLTextDataTrainDetail) | **GET** /automl/text/project/{project_id}/train/{train_id} | 
[**autoMLTextProjectCreate**](AutoMLTextDataApi.md#autoMLTextProjectCreate) | **POST** /automl/text/project | 
[**autoMLTextProjectDelete**](AutoMLTextDataApi.md#autoMLTextProjectDelete) | **DELETE** /automl/text/project/{project_id} | 
[**autoMLTextProjectDetail**](AutoMLTextDataApi.md#autoMLTextProjectDetail) | **GET** /automl/text/project/{project_id} | 
[**autoMLTextProjectList**](AutoMLTextDataApi.md#autoMLTextProjectList) | **GET** /automl/text/project | 
[**autoMLTextProjectUpdate**](AutoMLTextDataApi.md#autoMLTextProjectUpdate) | **PUT** /automl/text/project/{project_id} | 

<a name="autoMLTextDataDelete"></a>
# **autoMLTextDataDelete**
> autoMLTextDataDelete(projectId, trainId)



AutoML Text Data Delete

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let projectId = "projectId_example"; // String | 
let trainId = "trainId_example"; // String | 

apiInstance.autoMLTextDataDelete(projectId, trainId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextDataLaunchPrediction"></a>
# **autoMLTextDataLaunchPrediction**
> autoMLTextDataLaunchPrediction(files, projectId, trainId)



  **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let files = "files_example"; // Blob | 
let projectId = "projectId_example"; // String | 
let trainId = "trainId_example"; // String | 

apiInstance.autoMLTextDataLaunchPrediction(files, projectId, trainId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **Blob**|  | 
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="autoMLTextDataPredictionDetail"></a>
# **autoMLTextDataPredictionDetail**
> autoMLTextDataPredictionDetail(predictId, projectId, trainId)



  **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let predictId = "predictId_example"; // String | 
let projectId = "projectId_example"; // String | 
let trainId = "trainId_example"; // String | 

apiInstance.autoMLTextDataPredictionDetail(predictId, projectId, trainId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predictId** | **String**|  | 
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextDataPredictionResults"></a>
# **autoMLTextDataPredictionResults**
> autoMLTextDataPredictionResults(predictId, projectId, trainId)



  **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let predictId = "predictId_example"; // String | 
let projectId = "projectId_example"; // String | 
let trainId = "trainId_example"; // String | 

apiInstance.autoMLTextDataPredictionResults(predictId, projectId, trainId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predictId** | **String**|  | 
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextDataTrain"></a>
# **autoMLTextDataTrain**
> autoMLTextDataTrain(provider, trainingName, projectId)



  **AVAILABLE PROVIDERS**  |Name|Value| |-------------------------------|---------------| |[**Google Cloud Services**](https://www.edenai.co/catalog/google-cloud-natural-language)|&#x60;google&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|&#x60;amazon&#x60;|  

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let provider = "provider_example"; // String | 
let trainingName = "trainingName_example"; // String | 
let projectId = "projectId_example"; // String | 

apiInstance.autoMLTextDataTrain(provider, trainingName, projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**|  | 
 **trainingName** | **String**|  | 
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="autoMLTextDataTrainDetail"></a>
# **autoMLTextDataTrainDetail**
> autoMLTextDataTrainDetail(projectId, trainId)



AutoML Text Data Train Detail

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let projectId = "projectId_example"; // String | 
let trainId = "trainId_example"; // String | 

apiInstance.autoMLTextDataTrainDetail(projectId, trainId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextProjectCreate"></a>
# **autoMLTextProjectCreate**
> autoMLTextProjectCreate(projectName, projectDescription, files, type, language)



  **SUPPORTED FILES**  The API takes csv files separated using &#x27;,&#x27;. The csv must contain a header and exactly two columns, named &#x60;docs&#x60; and &#x60;labels&#x60; In case a document might have several labels, please separate your labels using &#x27;|&#x27;     **SUPPORTED LANGUAGE**  |Name|Type|Value| |---------------------------|-------------------------------|---------------| | **English (US)**|*&#x60;string&#x60;*|&#x60;en&#x60;| | **French**      |*&#x60;string&#x60;*|&#x60;fr&#x60;| | **German**      |*&#x60;string&#x60;*|&#x60;de&#x60;| | **Italian**     |*&#x60;string&#x60;*|&#x60;it&#x60;| | **Portuguese**  |*&#x60;string&#x60;*|&#x60;pt&#x60;| | **Arabic**      |*&#x60;string&#x60;*|&#x60;ar&#x60;| | **Chinese-Simplified**|*&#x60;string&#x60;*|&#x60;zh&#x60;| | **Chinese-Traditional**|*&#x60;string&#x60;*|&#x60;zh-TW&#x60;| | **Korean**      |*&#x60;string&#x60;*|&#x60;ko&#x60;| | **Japanese**    |*&#x60;string&#x60;*|&#x60;ja&#x60;| | **Hindi**       |*&#x60;string&#x60;*|&#x60;hi&#x60;| | **Spanish**     |*&#x60;string&#x60;*|&#x60;es&#x60;|    **AVAILABLE CLASSIFICATION TYPES**  |Type|Value|Description| |---------------------------|-------------------------------|---------------| | **Single Label Classification **|&#x60;single_label_classification&#x60;|Each document belongs to one category (label)| | **Multi Label Classification**|&#x60;multi_label_classification&#x60;|Documents might have several labels|  

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let projectName = "projectName_example"; // String | 
let projectDescription = "projectDescription_example"; // String | 
let files = "files_example"; // Blob | 
let type = "type_example"; // String | 
let language = "language_example"; // String | 

apiInstance.autoMLTextProjectCreate(projectName, projectDescription, files, type, language, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectName** | **String**|  | 
 **projectDescription** | **String**|  | 
 **files** | **Blob**|  | 
 **type** | **String**|  | 
 **language** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="autoMLTextProjectDelete"></a>
# **autoMLTextProjectDelete**
> autoMLTextProjectDelete(projectId)



AutoML Text Project Delete

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let projectId = "projectId_example"; // String | 

apiInstance.autoMLTextProjectDelete(projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextProjectDetail"></a>
# **autoMLTextProjectDetail**
> autoMLTextProjectDetail(projectId)



AutoML Text Project Detail

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let projectId = "projectId_example"; // String | 

apiInstance.autoMLTextProjectDetail(projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextProjectList"></a>
# **autoMLTextProjectList**
> autoMLTextProjectList()



AutoML Text Project List

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
apiInstance.autoMLTextProjectList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="autoMLTextProjectUpdate"></a>
# **autoMLTextProjectUpdate**
> autoMLTextProjectUpdate(projectName, projectDescription, type, language, projectId)



AutoML Text Project Update

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.AutoMLTextDataApi();
let projectName = "projectName_example"; // String | 
let projectDescription = "projectDescription_example"; // String | 
let type = "type_example"; // String | 
let language = "language_example"; // String | 
let projectId = "projectId_example"; // String | 

apiInstance.autoMLTextProjectUpdate(projectName, projectDescription, type, language, projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectName** | **String**|  | 
 **projectDescription** | **String**|  | 
 **type** | **String**|  | 
 **language** | **String**|  | 
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

