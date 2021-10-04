// Optical Character Recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document.

// npm install edenai

import {Ocr} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var ocrApis = new Ocr('YOUR API KEY')

// Available providers, languages and formats here: https://api.edenai.run/v1/redoc/#operation/OCR
ocrApis.ocr('YOURFILEPATH', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))