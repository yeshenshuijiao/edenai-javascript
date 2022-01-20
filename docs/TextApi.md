# EdenAiApiDocumentation.TextApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**keywordExtraction**](TextApi.md#keywordExtraction) | **POST** /pretrained/text/keyword_extraction | 
[**namedEntityRecognition**](TextApi.md#namedEntityRecognition) | **POST** /pretrained/text/named_entity_recognition | 
[**sentimentAnalysis**](TextApi.md#sentimentAnalysis) | **POST** /pretrained/text/sentiment_analysis | 
[**syntaxAnalysis**](TextApi.md#syntaxAnalysis) | **POST** /pretrained/text/syntax_analysis | 

<a name="keywordExtraction"></a>
# **keywordExtraction**
> InlineResponse2003 keywordExtraction(language, text, providers, language, text, providers)



Keyword extraction (also known as keyword detection or keyword analysis) is a text analysis technique that consists of automatically extracting the mostimportant words and expressions in a text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-text-analytics)|&#x60;microsoft&#x60;|&#x60;v3.1&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**IBM Watson**](https://www.edenai.co/catalog/watson-natural-language-understanding)|&#x60;ibm&#x60;|&#x60;v1 (2021-08-01)&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.TextApi();
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 

apiInstance.keywordExtraction(language, text, providers, language, text, providers, (error, data, response) => {
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
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="namedEntityRecognition"></a>
# **namedEntityRecognition**
> InlineResponse2004 namedEntityRecognition(language, text, providers, language, text, providers)



Named Entity Recognition (also called entity identification or entity extraction) is an information extraction technique that automatically identifies named entities in a text and classifies them into predefined categories.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-text-analytics)|&#x60;microsoft&#x60;|&#x60;v3.1&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**IBM Watson**](https://www.edenai.co/catalog/watson-natural-language-understanding)|&#x60;ibm&#x60;|&#x60;v1 (2021-08-01)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-natural-language)|&#x60;google&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.TextApi();
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 

apiInstance.namedEntityRecognition(language, text, providers, language, text, providers, (error, data, response) => {
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
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="sentimentAnalysis"></a>
# **sentimentAnalysis**
> InlineResponse2005 sentimentAnalysis(language, text, providers, language, text, providers)



Sentiment analysis API extracts sentiment in a given string of text.Sentiment analysis, also called &#x27;opinion mining&#x27;,uses natural language processing, text analysis and computational linguistics to identify and detect subjective information from the input text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;| |**Dutch**|&#x60;string&#x60;|&#x60;nl-NL&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-text-analytics)|&#x60;microsoft&#x60;|&#x60;v3.1&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**IBM Watson**](https://www.edenai.co/catalog/watson-natural-language-understanding)|&#x60;ibm&#x60;|&#x60;v1 (2021-08-01)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-natural-language)|&#x60;google&#x60;|&#x60;v1&#x60;| |[**Lettria**](https://www.edenai.co/catalog/Lettria)|&#x60;lettria&#x60;|&#x60;v5.5.2&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.TextApi();
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 

apiInstance.sentimentAnalysis(language, text, providers, language, text, providers, (error, data, response) => {
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
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="syntaxAnalysis"></a>
# **syntaxAnalysis**
> InlineResponse2006 syntaxAnalysis(language, text, providers, language, text, providers)



Syntax analysis consists principaly in highlighting the structure of a text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-text-analytics)|&#x60;microsoft&#x60;|&#x60;v3.1&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**IBM Watson**](https://www.edenai.co/catalog/watson-natural-language-understanding)|&#x60;ibm&#x60;|&#x60;v1 (2021-08-01)&#x60;| |[**Lettria**](https://www.edenai.co/catalog/Lettria)|&#x60;lettria&#x60;|&#x60;v5.5.2&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-natural-language)|&#x60;google&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.TextApi();
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 
let language = "language_example"; // String | 
let text = "text_example"; // String | 
let providers = "providers_example"; // String | 

apiInstance.syntaxAnalysis(language, text, providers, language, text, providers, (error, data, response) => {
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
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 
 **language** | **String**|  | 
 **text** | **String**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

