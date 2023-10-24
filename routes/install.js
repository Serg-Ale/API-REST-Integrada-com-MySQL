const express = require('express');
const router = express.Router();
const sequelize = require("../helpers/bd");

const AgendaModel = require("../model/Agenda");

router.get("/", async (req, res) => {
    await sequilize.sync({ force: true })

    let contato1 = await AgendaModel.save("Ryan Dahl", "email", "rdahl@nodejs.com");
    let contato2 = await AgendaModel.save("Brendan Eich", "email", "eich@js.org.com");
    let contato3 = await AgendaModel.save("Dennis Ritchie", "phone", "55 43 9 9823 2321");
    agenda = [contato1, contato2, contato3];
    res.json({ status: true, Agenda: agenda });
});

module.exports = router