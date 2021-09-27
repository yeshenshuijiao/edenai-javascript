// npm install edenai

import {Vision} from "edenai"

var visionApis = new Vision('YOUR API KEY')

visionApis.faceDetection(['PROVIDER(S)'], 'PATH TO YOUR FILE')
.then(response => console.log(response))