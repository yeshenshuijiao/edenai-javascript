# EdenAiApiDocumentation.AudioSpeechRecognitionAsyncBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **String** | Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands)) | 
**files** | **Blob** | File to analyse (ex: mp3, wav, m4a) | 
**providers** | **String** | Provider to compare (ex: [ &#x27;amazon&#x27;, &#x27;microsoft&#x27;, &#x27;ibm&#x27;,&#x27;google&#x27;, &#x27;threescribe]) | 
**webhookReceiver** | **String** | Webhook reciever should be a valid https URL (ex : https://your.listner.com/endpoint) | [optional] 
**usersWebhookParameters** | **String** | Json data that consist of additional parameters that will be sent back to the webhook receiver (ex: api key for security).                    **NOTE : The data will be returned back as a string that should be decoded into a json object!** | [optional] 
