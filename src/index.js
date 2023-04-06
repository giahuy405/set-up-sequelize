const express = require('express');
const app = express();

const cors = require('cors');
const rootRouter = require('./Router/rootRouter');
app.use(cors());

app.use(express.json());

app.listen(3000);

app.use('/api', rootRouter)