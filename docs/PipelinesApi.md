# EdenAiApiDocumentation.PipelinesApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pipelines**](PipelinesApi.md#pipelines) | **POST** /pipelines | 

<a name="pipelines"></a>
# **pipelines**
> InlineResponse200 pipelines(description, text, files, returnOnlyLast)



Pipelines let you combine different AI APIs from different providers into a single ready to use pipeline that you can run on your data.   **AVAILABLE FEATURES**   |Feature                   |Value|Can be first|Can be followed by| |--------------------------|-----------------------|------------|------------------| |**OCR**                     |&#x60;ocr&#x60;                  |&#x60;True&#x60;      |Sentiment Analysis, Syntax Analysis, Keyword Analysis, Named Entity Recognition, Text to speech, Translation,  Language Detection  | |**Translation**             |&#x60;automatic_translation&#x60;|&#x60;True&#x60;      |Sentiment Analysis, Syntax Analysis, Keyword Analysis, Named Entity Recognition, Text to speech                                    | |**Speech recognition**      |&#x60;speech_to_text&#x60;       |&#x60;True&#x60;      |Sentiment Analysis, Syntax Analysis, Keyword Analysis, Named Entity Recognition, Text to speech, Translation,  Language Detection  | |**Sentiment Analysis**      |&#x60;sentiment_analysis&#x60;   |&#x60;False&#x60;     |None                                                                                                                               | |**Syntax Analysis**         |&#x60;syntax_analysis&#x60;      |&#x60;False&#x60;     |None                                                                                                                               | |**Keyword Analysis**        |&#x60;keyword_extraction&#x60;   |&#x60;False&#x60;     |None                                                                                                                               | |**Named Entity Recognition**|&#x60;language_detection&#x60;   |&#x60;False&#x60;-    |None                                                                                                                               | |**Language Detection**      |&#x60;language_detection&#x60;   |&#x60;False&#x60;     |None                                                                                                                               | |**Text to speech**          |&#x60;text_to_speech&#x60;       |&#x60;False&#x60;     |None                                                                                                                               | 

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.PipelinesApi();
let description = "description_example"; // String | 
let text = "text_example"; // String | 
let files = "files_example"; // Blob | 
let returnOnlyLast = true; // Boolean | 

apiInstance.pipelines(description, text, files, returnOnlyLast, (error, data, response) => {
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
 **description** | **String**|  | 
 **text** | **String**|  | 
 **files** | **Blob**|  | 
 **returnOnlyLast** | **Boolean**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

