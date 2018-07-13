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

/**
 * @swagger
 * /api/puppies:
 *   post:
 *     tags:
 *       - Puppies
 *     description: Creates a new puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puppy
 *         description: Puppy object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/puppies', db.createPuppy);

/**
 * @swagger
 * /api/puppies/{id}:
 *   put:
 *     tags:
 *       - Puppies
 *     description: Updates a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: puppy
 *         description: Puppy object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/puppies/:id', db.updatePuppy);

/**
 * @swagger
 * /api/puppies/{id}:
 *   delete:
 *     tags:
 *       - Puppies
 *     description: Deletes a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/api/puppies/:id', db.removePuppy);

module.exports = router;
