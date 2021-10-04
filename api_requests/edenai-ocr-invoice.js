// OCR Invoice enables users to analyze invoices in a variety of formats and return structured data to automate the invoice processing.

// npm install edenai

import {Ocr} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var ocrApis = new Ocr('YOUR API KEY')

// Available providers, languages and formats here: https://api.edenai.run/v1/redoc/#operation/OCR%20Invoice
ocrApis.ocrInvoice('YOURFILEPATH', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))