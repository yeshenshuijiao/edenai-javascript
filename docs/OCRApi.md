# EdenAiApiDocumentation.OCRApi

All URIs are relative to *//https://api.edenai.run/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocr**](OCRApi.md#ocr) | **POST** /pretrained/ocr/ocr | 
[**ocrInvoice**](OCRApi.md#ocrInvoice) | **POST** /pretrained/ocr/ocr_invoice | 

<a name="ocr"></a>
# **ocr**
> InlineResponse2001 ocr(files, providers, language)



Optical Character Recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Arabic**|&#x60;string&#x60;|&#x60;ar-XA&#x60;| |**Chinese - Simplified**|&#x60;string&#x60;|&#x60;zh-CN&#x60;| |**Chinese - Traditional**|&#x60;string&#x60;|&#x60;zh-TW&#x60;| |**Czech**|&#x60;string&#x60;|&#x60;cz-CZ&#x60;| |**Danish**|&#x60;string&#x60;|&#x60;da-DK&#x60;| |**Dutch**|&#x60;string&#x60;|&#x60;nl-NL&#x60;| |**English**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**Finnish**|&#x60;string&#x60;|&#x60;fn-FN&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**German**|&#x60;string&#x60;|&#x60;de-DE&#x60;| |**Greek**|&#x60;string&#x60;|&#x60;gr-GR&#x60;| |**Hungarian**|&#x60;string&#x60;|&#x60;hu-HU&#x60;| |**Italian**|&#x60;string&#x60;|&#x60;it-IT&#x60;| |**Japanese**|&#x60;string&#x60;|&#x60;ja-JP&#x60;| |**Korean**|&#x60;string&#x60;|&#x60;ko-KR&#x60;| |**Polish**|&#x60;string&#x60;|&#x60;pl-PO&#x60;| |**Portuguese**|&#x60;string&#x60;|&#x60;pt-PT&#x60;| |**Russian**|&#x60;string&#x60;|&#x60;ru-RU&#x60;| |**Swedish**|&#x60;string&#x60;|&#x60;sw-SW&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;| |**Turkish**|&#x60;string&#x60;|&#x60;tr-TR&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision-(ocr))|&#x60;google&#x60;|&#x60;v1&#x60;| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision-(ocr))|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-textract)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.OCRApi();
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 
let language = "language_example"; // String | 

apiInstance.ocr(files, providers, language, (error, data, response) => {
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
 **language** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="ocrInvoice"></a>
# **ocrInvoice**
> InlineResponse2002 ocrInvoice(files, providers, language)



The OCR Invoice API enables customers to take invoices in a variety of formats and return structured data to automate the invoice processing.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Mindee**](https://www.edenai.co/catalog/mindee)|&#x60;mindee&#x60;|&#x60;v2&#x60;| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision-(ocr))|&#x60;microsoft&#x60;|&#x60;v2.1-preview.3&#x60;|

### Example
```javascript
import {EdenAiApiDocumentation} from 'eden_ai_api_documentation';
let defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new EdenAiApiDocumentation.OCRApi();
let files = "files_example"; // Blob | 
let providers = "providers_example"; // String | 
let language = "language_example"; // String | 

apiInstance.ocrInvoice(files, providers, language, (error, data, response) => {
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
 **language** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

