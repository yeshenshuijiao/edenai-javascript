// Keyword extraction consists of automatically extracting the most important words and expressions in a text.

// npm install edenai

import {Text} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var textApis = new Text('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Keyword%20Extraction
textApis.keywordExtraction('YOUR TEXT', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))