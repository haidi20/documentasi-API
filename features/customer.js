const express = require("express");
const app = express();

/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

exports.show = (req, res) => {
    res.status(200).send("get customer");
}