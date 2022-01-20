# EdenAiApiDocumentation.VisionApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**explicitContentDetection**](VisionApi.md#explicitContentDetection) | **POST** /pretrained/vision/explicit_content_detection | 
[**faceDetection**](VisionApi.md#faceDetection) | **POST** /pretrained/vision/face_detection | 
[**objectDetection**](VisionApi.md#objectDetection) | **POST** /pretrained/vision/object_detection | 

<a name="explicitContentDetection"></a>
# **explicitContentDetection**
> InlineResponse2009 explicitContentDetection(files, providers)



Explicit Content Detection detects adult only content in videos, who is generally inappropriate for people under the age of 18 and includes nudity, sexual activity and pornography ...  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision)|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-rekognition)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision)|&#x60;google&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.VisionApi();
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 

apiInstance.explicitContentDetection(files, providers, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **Blob**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="faceDetection"></a>
# **faceDetection**
> InlineResponse20010 faceDetection(files, providers)



Face Detection is a computer technology being used in a variety of applicationsthat identifies human faces in digital images.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision)|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-rekognition)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision)|&#x60;google&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.VisionApi();
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 

apiInstance.faceDetection(files, providers, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **Blob**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="objectDetection"></a>
# **objectDetection**
> InlineResponse20011 objectDetection(files, providers)



Object Detection is a computer vision technique that allows us to identify and locate objects in an image or video  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision)|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-rekognition)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision)|&#x60;google&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.VisionApi();
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 

apiInstance.objectDetection(files, providers, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **Blob**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

