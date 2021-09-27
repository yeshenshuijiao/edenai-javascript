// npm install edenai

import {Speech} from "edenai"

var speechApis = new Speech('YOUR API KEY')

speechApis.speechToText(['PROVIDER(S)'], 'YOURFILEPATH', 'LANGUAGE')
.then(response => console.log(response))