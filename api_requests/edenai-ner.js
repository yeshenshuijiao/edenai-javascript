// npm install edenai

import {Text} from "edenai"
    
var textApis = new Text('YOUR API KEY')
    
textApis.namedEntityRecognition('YOUR TEXT', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))
