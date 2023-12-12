/*
In a large IT organization/business it will often be the software architects job to determine which framework to use. There are several things to consider when selecting a JavaScript library/framework, they include but are not limited to:
- Community and ecosystem is important because it is preferable to have a supportive and skilled community, and a rich ecosystem around the framework.
- Performance and scalability is vital characteristics for building large applications, which recieves a lot of traffic and thus also needs to be scalable in case there is need for scaling up to meet increased demand.
- Chosing the right technology: It's vital to choose a framework that provide the technologies needed by the architect, for example in regard to modularity, flexibility and security. 
*/

/*
Express it primarily used for building server side web applications and APIs. It simplifies the process by providing rich and robust features and utilities for f.ex request handling, more on that in the next section about what Express adds to Node.
*/

/*
Simply put Express is a Node framework that makes the job of writing code much more efficient than using vanilla Node. The things that take many lines of code to do in Node, is simplified in Express through libraries and other utilities. This 
reduces the abount of "boiler-plate" code the developer has to write, so that he/she can focus on the business logic instead. Specifically some of what Express adds to Node is:
- Routing: Creating routes for different HTTP methods (GET, POST, PATCH, PUT, DELETE, OPTIONS, TRACE etc.)
- Middleware: Express makes it easy to add middleware functions during the request-response cycle. This can include important tasks like authentication, logging, data parsing, error handling etc.
- Template engines: These are used so that Express can render HTML content. ejs is an example of a popular template engine. 
*/

function logHandler(request, response, next) {
    console.log("In comes a request to: " + request.url);
    next();
}

function responseHandler(requset, response) {
    response.end("Hello, world!");
}

/*
Import express and http. The http package is a built in package, while express is a third party package that must be installed with `npm install express`.
*/
const express = require("express");
const http = require("http");

/* Create express app and asign it to the constant "app" */
const app = express();

app.use(logHandler);
app.use(responseHandler);

http.createServer(app).listen(3000);