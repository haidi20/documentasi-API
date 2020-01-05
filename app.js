const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const customer = require("./features/customer");

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerDefinition = {
  info: {
    title: "Customer API",
    description: "Customer API Information",
    contact: {
      name: "Amazing Developer"
    },
    servers: ["http://localhost:5000"]
  }
};
 
const swaggerOptions = {
  swaggerDefinition,
  // ['.routes/*.js']
  apis: ["app.js", "./features/customer.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/customers', customer.show);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
