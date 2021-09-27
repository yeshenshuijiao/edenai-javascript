// npm install edenai

import {Text} from "edenai"

var textApis = new Text('YOUR API KEY')

textApis.sentimentAnalysis('YOUR TEXT', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))