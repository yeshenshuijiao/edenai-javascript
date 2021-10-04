// Object detection is a computer vision technology which allows to detect common objects on images. 

// npm install edenai

import {Vision} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var visionApis = new Vision('YOUR API KEY')

// Available providers, languages and formats here: https://api.edenai.run/v1/redoc/#operation/Object%20Detection
visionApis.objectDetection(['PROVIDER(S)'], 'PATH TO YOUR FILE')
.then(response => console.log(response))