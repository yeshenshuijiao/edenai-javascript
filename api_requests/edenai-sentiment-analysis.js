// Sentiment analysis extracts sentiment in a given string of text. Sentiment analysis, also called 'opinion mining', uses natural language processing, text analysis and computational linguistics to identify and detect subjective information from the input text.

// npm install edenai

import {Text} from "edenai"

// Get your API key here: https://app.edenai.run/admin/account
var textApis = new Text('YOUR API KEY')

// Available providers and languages here: https://api.edenai.run/v1/redoc/#operation/Sentiment%20Analysis
textApis.sentimentAnalysis('YOUR TEXT', ['PROVIDER(S)'], 'LANGUAGE')
.then(response => console.log(response))