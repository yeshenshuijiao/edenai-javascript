// npm install edenai

import {Ocr} from "edenai"

var ocrApis = new Ocr('YOUR API KEY')

ocrApis.ocrInvoice('YOURFILEPATH', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))