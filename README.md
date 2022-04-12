# eden_ai_api_documentation

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.edenai.co](https://www.edenai.co)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install eden_ai_api_documentation --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your eden_ai_api_documentation from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('eden_ai_api_documentation')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/edenai/GIT_REPO_ID
then install it via:

```shell
    npm install edenai/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');

var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new EdenAiApiDocumentation.AutoMLTextDataApi()

var projectId = "projectId_example"; // {String} 

var trainId = "trainId_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.automlTextDataDelete(projectId, trainId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.edenai.run/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EdenAiApiDocumentation.EdenAIToolsApi* | [**search**](docs/EdenAIToolsApi.md#search) | **POST** /tools/search | 
*EdenAiApiDocumentation.OCRApi* | [**ocr**](docs/OCRApi.md#ocr) | **POST** /pretrained/ocr/ocr | 
*EdenAiApiDocumentation.OCRApi* | [**ocrInvoice**](docs/OCRApi.md#ocrInvoice) | **POST** /pretrained/ocr/ocr_invoice | 
*EdenAiApiDocumentation.PipelinesApi* | [**pipelines**](docs/PipelinesApi.md#pipelines) | **POST** /pipelines | 
*EdenAiApiDocumentation.SpeechApi* | [**asyncSpeechToText**](docs/SpeechApi.md#asyncSpeechToText) | **POST** /pretrained/audio/speech_recognition_async | 
*EdenAiApiDocumentation.SpeechApi* | [**asyncSpeechToText_0**](docs/SpeechApi.md#asyncSpeechToText_0) | **GET** /pretrained/audio/speech_recognition_async/{job_id} | 
*EdenAiApiDocumentation.SpeechApi* | [**speechToText**](docs/SpeechApi.md#speechToText) | **POST** /pretrained/audio/speech_to_text | 
*EdenAiApiDocumentation.SpeechApi* | [**textToSpeech**](docs/SpeechApi.md#textToSpeech) | **POST** /pretrained/audio/text_to_speech | 
*EdenAiApiDocumentation.TextApi* | [**keywordExtraction**](docs/TextApi.md#keywordExtraction) | **POST** /pretrained/text/keyword_extraction | 
*EdenAiApiDocumentation.TextApi* | [**namedEntityRecognition**](docs/TextApi.md#namedEntityRecognition) | **POST** /pretrained/text/named_entity_recognition | 
*EdenAiApiDocumentation.TextApi* | [**sentimentAnalysis**](docs/TextApi.md#sentimentAnalysis) | **POST** /pretrained/text/sentiment_analysis | 
*EdenAiApiDocumentation.TextApi* | [**syntaxAnalysis**](docs/TextApi.md#syntaxAnalysis) | **POST** /pretrained/text/syntax_analysis | 
*EdenAiApiDocumentation.TranslationApi* | [**automaticTranslation**](docs/TranslationApi.md#automaticTranslation) | **POST** /pretrained/translation/automatic_translation | 
*EdenAiApiDocumentation.TranslationApi* | [**languageDetection**](docs/TranslationApi.md#languageDetection) | **POST** /pretrained/translation/language_detection | 
*EdenAiApiDocumentation.VisionApi* | [**explicitContentDetection**](docs/VisionApi.md#explicitContentDetection) | **POST** /pretrained/vision/explicit_content_detection | 
*EdenAiApiDocumentation.VisionApi* | [**faceDetection**](docs/VisionApi.md#faceDetection) | **POST** /pretrained/vision/face_detection | 
*EdenAiApiDocumentation.VisionApi* | [**objectDetection**](docs/VisionApi.md#objectDetection) | **POST** /pretrained/vision/object_detection | 


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

