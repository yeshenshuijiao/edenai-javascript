// Named Entity Recognition (NER - also called entity identification or entity extraction) is an information extraction technique that automatically identifies named entities in a text and classifies them into predefined categories.

// npm install edenai

import {Text} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var textApis = new Text('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Named%20Entity%20Recognition
textApis.namedEntityRecognition('YOUR TEXT', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))
