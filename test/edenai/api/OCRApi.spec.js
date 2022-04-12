(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", "../../../src/edenai/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require("../../../src/edenai/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EdenAiApiDocumentation);
  }
})(this, function (expect, EdenAiApiDocumentation) {
  "use strict";

  var instance;
  var fs = require("fs");

  beforeEach(function () {
    instance = new EdenAiApiDocumentation.OCRApi();
  });

  describe("edenai", function () {
    describe("OCRApi", function () {
      describe("ocr", function () {
        it("should call ocr successfully", function (done) {
          // TODO: uncomment, update parameter values for ocr call and complete the assertions

          var files = fs.ReadStream("/home/michel/Desktop/meuble.png");
          var providers = "['amazon']";
          var language = "fr-FR";

          instance.ocr(
            files,
            providers,
            language,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2003);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];

                  expect(data).to.be.a(
                    EdenAiApiDocumentation.InlineResponse2003Result1
                  );
                  expect(data.solutionName).to.be.a("string");
                  expect(data.provider).to.be.a("string");
                  expect(data.status).to.be.a("string");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.result).to.be.a(
                    EdenAiApiDocumentation.InlineResponse2003Result
                  );
                  expect(data.result.text).to.be.a("string");
                  // {
                  //   let dataCtr = data.result.boundingBoxes;
                  //   expect(dataCtr).to.be.an(Array);
                  //   expect(dataCtr).to.not.be.empty();
                  //   for (let p in dataCtr) {
                  //     let data = dataCtr[p];
                  //     expect(data).to.be.a(
                  //       EdenAiApiDocumentation.InlineResponse2003ResultBoundingBoxes
                  //     );
                  //     expect(data.wordText).to.be.a("string");
                  //     expect(data.left).to.be.a("number");
                  //     expect(data.top).to.be.a("number");
                  //     expect(data.width).to.be.a("number");
                  //     expect(data.hight).to.be.a("number");
                  //   }
                  // }
                }
              }

              done();
            }
          );
        });
      });
      describe("ocrInvoice", function () {
        it("should call ocrInvoice successfully", function (done) {
          // TODO: uncomment, update parameter values for ocrInvoice call and complete the assertions
          var files = fs.ReadStream(
            "/home/michel/Desktop/Free-invoicing-page_Fr-Cover-picture.png"
          );
          var providers = "['dataleon']";
          var language = "fr-FR";

          instance.ocrInvoice(
            files,
            providers,
            language,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2004);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(
                    EdenAiApiDocumentation.InlineResponse2004Result1
                  );
                  expect(data.solutionName).to.be.a("string");
                  expect(data.provider).to.be.a("string");
                  expect(data.status).to.be.a("string");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.originalResult).to.be.a(Object);
                  {
                    let dataCtr = data.result;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(
                        EdenAiApiDocumentation.InlineResponse2004Result
                      );
                      {
                        let dataCtr = data;
                        // console.log(dataCtr);
                        expect(dataCtr).to.be.an(Object);
                        expect(dataCtr).to.not.be.empty();
                        expect(dataCtr.customerInformation).to.be.a(EdenAiApiDocumentation.InlineResponse2004CustomerInformation);
                        expect(dataCtr.customerInformation.customerAddress).to.be.a("string");
                        expect(dataCtr.merchantInformation).to.be.a(EdenAiApiDocumentation.InlineResponse2004MerchantInformation);
                        expect(dataCtr.merchantInformation.merchantAddress).to.be.a("string");
                        expect(dataCtr.merchantInformation.merchantName).to.be.a("string");
                        expect(dataCtr.invoiceTotal).to.be.a("number");
                        expect(dataCtr.subtotal).to.be.a("number");
                        expect(dataCtr._date).to.be.a("string");
                        expect(dataCtr.dueDate).to.be.a("string");
                        expect(dataCtr.invoiceNumber).to.be.a("string");
                        expect(dataCtr.taxes).to.be.a("string");
                      }
                      //version swagger de base qui marche pas pcq ocr invoice a un retour de merde !
                      // for (let p in dataCtr) {
                      //   let data = dataCtr[p];
                      //   expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2004Results);
                      //   expect(data.wordText).to.be.a('string');
                      //   expect(data.left).to.be.a('number');
                      //   expect(data.top).to.be.a('number');
                      //   expect(data.width).to.be.a('number');
                      //   expect(data.hight).to.be.a('number');
                      //   expect(data.customerInformation).to.be.a(EdenAiApiDocumentation.InlineResponse2004CustomerInformation);
                      //   expect(data.customerInformation.customerAddress).to.be.a('string');
                      //   expect(data.customerInformation.customerName).to.be.a('string');
                      //   expect(data.merchantInformation).to.be.a(EdenAiApiDocumentation.InlineResponse2004MerchantInformation);
                      //   expect(data.merchantInformation.merchantAddress).to.be.a('string');
                      //   expect(data.merchantInformation.merchantName).to.be.a('string');
                      //   expect(data.invoiceTotal).to.be.a('string');
                      //   expect(data.subtotal).to.be.a('string');
                      //   expect(data._date).to.be.a('string');
                      //   expect(data.dueDate).to.be.a('string');
                      //   expect(data.invoiceNumber).to.be.a('string');
                      //   expect(data.taxes).to.be.a('string');
                      //   expect(data.locale).to.be.a(EdenAiApiDocumentation.InlineResponse2004Locale);
                      //   expect(data.locale.currency).to.be.a('string');
                      //   expect(data.locale.language).to.be.a('string');
                      //   {
                      //     let dataCtr = data.itemLines;
                      //     expect(dataCtr).to.be.an(Array);
                      //     expect(dataCtr).to.not.be.empty();
                      //     for (let p in dataCtr) {
                      //       let data = dataCtr[p];
                      //       expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2004ItemLines);
                      //       expect(data.amount).to.be.a('string');
                      //       expect(data.description).to.be.a('string');
                      //       expect(data.quantity).to.be.a('string');
                      //       expect(data.unitPrice).to.be.a('string');
                      //     }
                      //   }
                      // }
                    }
                  }
                }
              }

              done();
            }
          );
        });
      });
    });
  });
});
