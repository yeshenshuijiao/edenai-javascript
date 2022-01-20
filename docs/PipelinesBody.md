# EdenAiApiDocumentation.PipelinesBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The desciption field must be an array of ordered dictionaries.                                                      Each dictionary describes the feature to call. in fact, it has to contain two keys \&quot;feature\&quot; and \&quot;params\&quot;.   * feature conatins a string (the value of the feature ex : automatic_translation).  * params contains a dictionary of parameters to be used to call the feature, see the feature corresponding documentation to know which parameters well be needed.   ex : &#x60;[ { \&quot;feature\&quot;: \&quot;ocr\&quot;,  \&quot;params\&quot;: { \&quot;providers\&quot;: \&quot;[&#x27;amazon&#x27;]\&quot;,\&quot;language\&quot;: \&quot;en-US\&quot; } }, { \&quot;feature\&quot;: \&quot;syntax_analysis\&quot;,  \&quot;params\&quot;: { \&quot;providers\&quot;: \&quot;[&#x27;amazon&#x27;]\&quot;,\&quot;language\&quot;: \&quot;en-US\&quot; } }]&#x60;                                                       | 
**text** | **String** | The input text for the first feature of the pipeline | [optional] 
**files** | **Blob** | The input file for the first feature of the pipeline | [optional] 
**returnOnlyLast** | **Boolean** | This parameter allows user to choose to output only the final result or all the intermediate results. | 
