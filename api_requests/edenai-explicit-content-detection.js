// npm install edenai

import {Vision} from "edenai"

var visionApis = new Vision('YOUR API KEY')

visionApis.explicitContentDetection(['PROVIDER(S)'], 'PATH TO YOUR FILE')
.then(response => console.log(response))