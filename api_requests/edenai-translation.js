// Machine translation (or automatic translation) refers to the translation of a text into another language.

// npm install edenai

import {Translation} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var translationApis = new Translation('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Automatic%20Translation
translationApis.translate('YOUR TEXT', ['PROVIDER(S)'], 'SOURCE LANGUAGE', 'TARGET LANGUAGE')
.then(response => console.log(response))