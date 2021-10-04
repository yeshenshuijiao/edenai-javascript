// Speech-to-Text (or speech recognition) is technology that can recognize spoken words, which can then be converted to text.

// npm install edenai

import {Speech} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var speechApis = new Speech('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Speech%20Recognition
speechApis.speechToText(['PROVIDER(S)'], 'YOURFILEPATH', 'LANGUAGE')
.then(response => console.log(response))