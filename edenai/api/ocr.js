import ApiBase from "./api_base.js";
import { default as FormData } from "form-data"
import * as fs from 'fs';

class Ocr extends ApiBase {
  constructor(frontApiKey) {
    super(frontApiKey)
  }

  formatData (filePath, providers, language) {
    const user = new FormData();
      const key = [
        "files",
        "providers",
        "language",
      ];
      const value = [
        fs.createReadStream(filePath),
        JSON.stringify(providers),
        language
      ];
      for (let i = 0; i < value.length; i++) {
        user.append(key[i], value[i]);
      }
    return user  
  }

  ocrInvoice = (files, providers, language) => {
    const userData = this.formatData(files, providers, language)
    return this.post(userData, "v1/pretrained/ocr/ocr_invoice")
  }

  ocr = (files, providers, language) => {
    const userData = this.formatData(files, providers, language);
    return this.post(userData, 'v1/pretrained/ocr/ocr')
  }

}

export default Ocr