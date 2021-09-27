// npm install edenai

import {Translation} from "edenai"

var translationApis = new Translation('YOUR API KEY')

translationApis.translate('YOUR TEXT', ['PROVIDER(S)'], 'SOURCE LANGUAGE', 'TARGET LANGUAGE')
.then(response => console.log(response))