// npm install edenai

import {Text} from "edenai"

var textApis = new Text('YOUR API KEY')

textApis.syntaxAnalysis('YOUR TEXT', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))