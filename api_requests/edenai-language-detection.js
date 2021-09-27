// npm install edenai

import {Translation} from "edenai"

var translationApis = new Translation('YOUR API KEY')

translationApis.languageDetection('YOUR TEXT', ['PROVIDER(S)'])
.then(response => console.log(response))
