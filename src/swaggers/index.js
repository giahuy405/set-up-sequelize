/**
 * @swagger
 *  /api/user/get-all-user:
 *  get:
 *      description: responses
 *      tags: [User]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/user/get-user-pagination/{page}/{pageSize}:
 *  get:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: page
 *      - in: path
 *        name: pageSize
 *      responses:
 *          200: 
 *              description: success   
 */


/**
*
 * /api/user/get-user-pagination/{page}/{pageSize}
 *  get:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */