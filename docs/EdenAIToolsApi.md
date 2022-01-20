# EdenAiApiDocumentation.EdenAIToolsApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](EdenAIToolsApi.md#search) | **POST** /tools/search | 

<a name="search"></a>
# **search**
> InlineResponse20012 search(text, words, text, words)



This is an easy tool to lookup for a list of words in a given text

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.EdenAIToolsApi();
let text = "text_example"; // String | 
let words = "words_example"; // String | 
let text = "text_example"; // String | 
let words = "words_example"; // String | 

apiInstance.search(text, words, text, words, (error, data, response) => {
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
 **text** | **String**|  | 
 **words** | **String**|  | 
 **text** | **String**|  | 
 **words** | **String**|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

