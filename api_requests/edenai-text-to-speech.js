// npm install edenai

import {Speech} from "edenai"

var speechApis = new Speech('YOUR API KEY')

speechApis.textToSpeech('YOUR TEXT', ['PROVIDER(S)'],'LANGUAGE', 'MALE OR FEMALE')
.then(response => console.log(response))