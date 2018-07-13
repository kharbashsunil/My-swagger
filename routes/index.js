var express = require('express');
var router = express.Router();
var db = require('../mysql_query/query.js');


/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string

 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */


// /**
//  * @swagger
// * definitions:
// *   Puppy:
// *             properties:
// *                groupname:
// *                  type: string
// *                description:
// *                  type: string                
// *                members:
// *                 type: array
// *                 items:
// *                  type: number
//  */




/**
 * @swagger
 * /api/puppies:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */

router.get('/api/puppies',db.getAllPuppies);

module.exports = router;
