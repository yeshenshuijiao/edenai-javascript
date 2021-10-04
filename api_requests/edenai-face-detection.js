// Face Detection is a computer vision technology which allows to detect human faces on images with additionnal informations: estimated age, sex, emotion, etc.

// npm install edenai

import {Vision} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var visionApis = new Vision('YOUR API KEY')

// Available providers, languages and formats here: https://api.edenai.run/v1/redoc/#operation/Face%20Detection
visionApis.faceDetection(['PROVIDER(S)'], 'PATH TO YOUR FILE')
.then(response => console.log(response))