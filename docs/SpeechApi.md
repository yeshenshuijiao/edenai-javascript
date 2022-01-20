# EdenAiApiDocumentation.SpeechApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asynchronousSpeechRecognition**](SpeechApi.md#asynchronousSpeechRecognition) | **POST** /pretrained/audio/speech_recognition_async | 
[**asynchronousSpeechRecognition_0**](SpeechApi.md#asynchronousSpeechRecognition_0) | **GET** /pretrained/audio/speech_recognition_async/{job_id} | 
[**speechRecognition**](SpeechApi.md#speechRecognition) | **POST** /pretrained/audio/speech_recognition | 
[**textToSpeech**](SpeechApi.md#textToSpeech) | **POST** /pretrained/audio/text_to_speech | 

<a name="asynchronousSpeechRecognition"></a>
# **asynchronousSpeechRecognition**
> asynchronousSpeechRecognition(language, files, providers, webhookReceiver, usersWebhookParameters)



Speech recognition is technology that can recognize spoken words, which can then be converted to text. This endpoint allows you to launch asynchronous speech recognition jobs.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English (US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**English (GB)**|&#x60;string&#x60;|&#x60;en-GB&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;| |**Dutch (Netherlands)**|&#x60;string&#x60;|&#x60;nl-NL&#x60;| |**Japanese**|&#x60;string&#x60;|&#x60;ja-JP&#x60;| |**Russian**|&#x60;string&#x60;|&#x60;ru-RU&#x60;| |**Arabic**|&#x60;string&#x60;|&#x60;ar-SA&#x60;| |**Italian**|&#x60;string&#x60;|&#x60;it-IT&#x60;| |**Korean**|&#x60;string&#x60;|&#x60;ko-KR&#x60;| |**Portuguese**|&#x60;string&#x60;|&#x60;pt-PT&#x60;| |**Turkish**|&#x60;string&#x60;|&#x60;tr-TR&#x60;| |**Indonesian**|&#x60;string&#x60;|&#x60;id-ID&#x60;| |**Malay**|&#x60;string&#x60;|&#x60;ms-MY&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-transcribe)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Assembly**](https://www.edenai.co/catalog/assembly-ai)|&#x60;assembly&#x60;|&#x60;v1&#x60;| |[**speechmatics**]()|&#x60;Speechmatics&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.SpeechApi();
let language = "language_example"; // String | 
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 
let webhookReceiver = "webhookReceiver_example"; // String | 
let usersWebhookParameters = "usersWebhookParameters_example"; // String | 

apiInstance.asynchronousSpeechRecognition(language, files, providers, webhookReceiver, usersWebhookParameters, (error, data, response) => {
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
 **language** | **String**|  | 
 **files** | **Blob**|  | 
 **providers** | **String**|  | 
 **webhookReceiver** | **String**|  | 
 **usersWebhookParameters** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="asynchronousSpeechRecognition_0"></a>
# **asynchronousSpeechRecognition_0**
> asynchronousSpeechRecognition_0(jobId)



This endpoint allows you to check the state of  your asynchronous speech recognition job and returns the results if they are ready.

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.SpeechApi();
let jobId = "jobId_example"; // String | 

apiInstance.asynchronousSpeechRecognition_0(jobId, (error, data, response) => {
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
 **jobId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="speechRecognition"></a>
# **speechRecognition**
> InlineResponse201 speechRecognition(language, files, providers)



Speech recognition is technology that can recognize spoken words, which can then be converted to text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English (US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**English (GB)**|&#x60;string&#x60;|&#x60;en-GB&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;| |**Dutch (Netherlands)**|&#x60;string&#x60;|&#x60;nl-NL&#x60;| |**Japanese**|&#x60;string&#x60;|&#x60;ja-JP&#x60;| |**Russian**|&#x60;string&#x60;|&#x60;ru-RU&#x60;| |**Arabic**|&#x60;string&#x60;|&#x60;ar-SA&#x60;| |**Italian**|&#x60;string&#x60;|&#x60;it-IT&#x60;| |**Korean**|&#x60;string&#x60;|&#x60;ko-KR&#x60;| |**Portuguese**|&#x60;string&#x60;|&#x60;pt-PT&#x60;| |**Turkish**|&#x60;string&#x60;|&#x60;tr-TR&#x60;| |**Indonesian**|&#x60;string&#x60;|&#x60;id-ID&#x60;| |**Malay**|&#x60;string&#x60;|&#x60;ms-MY&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-speech-to-text)|&#x60;microsoft&#x60;|&#x60;v1.0&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-transcribe)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-speech-to-text)|&#x60;google&#x60;|&#x60;v1p1beta1&#x60;| |[**Deepgram**](https://www.edenai.co/catalog/deepgram)|&#x60;deepgram&#x60;|&#x60;v1&#x60;| |[**Speechmatics**]()|&#x60;speechmatics&#x60;|&#x60;v1&#x60;| |[**Assembly**](https://www.edenai.co/catalog/assembly-ai)|&#x60;assembly&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.SpeechApi();
let language = "language_example"; // String | 
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 

apiInstance.speechRecognition(language, files, providers, (error, data, response) => {
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
 **files** | **Blob**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="textToSpeech"></a>
# **textToSpeech**
> InlineResponse2011 textToSpeech(text, language, option, providers)



Text-to-speech (TTS) system converts normal language text into speech.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Arabic**|&#x60;string&#x60;|&#x60;ar-XA&#x60;| |**Chinese**|&#x60;string&#x60;|&#x60;cmn-CN&#x60;| |**Danish**|&#x60;string&#x60;|&#x60;da-DK&#x60;| |**Dutch**|&#x60;string&#x60;|&#x60;nl-NL&#x60;| |**English (US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**English (UK)**|&#x60;string&#x60;|&#x60;en-GB&#x60;| |**German**|&#x60;string&#x60;|&#x60;de-DE&#x60;| |**Italy**|&#x60;string&#x60;|&#x60;it-IT&#x60;| |**Japanese**|&#x60;string&#x60;|&#x60;ja-JP&#x60;| |**Portuguese (Brazil)**|&#x60;string&#x60;|&#x60;pt-BR&#x60;| |**Portuguese (Portugal)**|&#x60;string&#x60;|&#x60;pt-PT&#x60;| |**Russian**|&#x60;string&#x60;|&#x60;ru-RU&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-text-to-speech)|&#x60;microsoft&#x60;|&#x60;v1.0&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-polly)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-text-to-speech)|&#x60;google&#x60;|&#x60;v1&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.SpeechApi();
let text = "text_example"; // String | 
let language = "language_example"; // String | 
let option = "option_example"; // String | 
let providers = "providers_example"; // String | 

apiInstance.textToSpeech(text, language, option, providers, (error, data, response) => {
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
 **language** | **String**|  | 
 **option** | **String**|  | 
 **providers** | **String**|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

