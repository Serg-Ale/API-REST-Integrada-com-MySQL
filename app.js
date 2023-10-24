const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const AgendaRouter = require('./routes/agenda')
app.use('/agenda', AgendaRouter)

const LoginRouter = require('./routes/login')
app.use('/', LoginRouter)

const InstallRouter = require('./routes/install');
app.use('/install', InstallRouter);

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_doc.json')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => {
    console.log("Rodando... ")
})