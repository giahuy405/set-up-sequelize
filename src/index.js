const express = require('express');
const app = express();

const cors = require('cors');
const rootRouter = require('./Router/rootRouter');
app.use(cors());
 
app.use(express.json());
// có thể thấy được thư mực bên trong 
app.use(express.static('.'))

app.listen(3000);

app.use('/api', rootRouter)




// http://localhost:3000/swagger/
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        info: {
            title: "api",
            version: "1.0.0",
            description:'hello'
        }
    },
    apis: ["src/swaggers/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));


