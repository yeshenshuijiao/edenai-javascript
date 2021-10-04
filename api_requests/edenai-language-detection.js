// Language Detection or language guessing is the algorithm of determining which natural language given content is in.

// npm install edenai

import {Translation} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var translationApis = new Translation('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Language%20Detection
translationApis.languageDetection('YOUR TEXT', ['PROVIDER(S)'])
.then(response => console.log(response))
