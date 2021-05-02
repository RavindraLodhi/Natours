/**build in module in node js */
const fs = require("fs");
const http = require("http");
const url = require("url");
var slugify = require('slugify')
/**imprting our module */
const replaceTemplate = require('./modules/replaceTemplate');

/**Reading the file.*/
const data  = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const templateProduct= fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");
const tempCard  = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");

/**create server */
const server = http.createServer((req, res) => {
  
  /**distructuring in es6 **/
  const {query, pathname } = url.parse(req.url, true)
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(404, {"Content-type": "text/html",});
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);


/**Overview page **/
  } else if (pathname === "/product") {
   const product = dataObj[query.id];
   const output =   replaceTemplate(templateProduct, product)

    res.end(output);

 /** API CALL page **/
  } else if (pathname === "/API") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(dataObj );

/** Page note found **/
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>Page Not Found!</h1>");
  }


});


/**listen the port so we can run on this port **/
server.listen(8000, "127.0.0.1", () => {
  console.log("server started...");
  console.log(slugify("Some Thing" , {
    lower : true,
   // replacement : ' ',
    remove  : undefined,
    strict : false
  }));
});
