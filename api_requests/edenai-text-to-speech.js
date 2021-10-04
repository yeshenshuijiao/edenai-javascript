// Text-to-speech (TTS) system converts natural written text into an audio speech.

// npm install edenai

import {Speech} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var speechApis = new Speech('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Text%20To%20Speech
speechApis.textToSpeech('YOUR TEXT', ['PROVIDER(S)'],'LANGUAGE', 'MALE OR FEMALE')
.then(response => console.log(response))