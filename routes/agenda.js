const express = require('express');
const router = express.Router();
const Auth = require('../helpers/Auth');
const AgendaModel = require('../model/Agenda');

router.get('/', async (req, res) => {
    try {
        let list;
        if (req.query.nome) {
            list = await AgendaModel.listByName(req.query.nome);
        } else if (req.query.tipo) {
            list = await AgendaModel.listByTipo(req.query.tipo);
        } else {
            list = await AgendaModel.list();
        }
        res.json({ count: list.length, lista: list });
    } catch (error) {
        res.status(500).json({ mensagem: `Erro interno do servidor: ${error.message}` });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let obj = await AgendaModel.getElementById(req.params.id);
        if (obj) {
            res.json({ obj: obj });
        } else {
            res.status(404).json({ mensagem: "O ID informado não é válido" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: `Erro interno do servidor: ${error.message}` });
    }
});

router.post('/', Auth.validaAcesso, async (req, res) => {
    try {
        let { nome, tipo, contato } = req.body;
        if (nome && tipo && contato) {
            let obj = await AgendaModel.save(nome, tipo, contato);
            res.json({ obj: obj });
        } else {
            res.status(400).json({ mensagem: "Falha ao inserir o novo registro na agenda" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: `Erro interno do servidor: ${error.message}` });
    }
});

router.put('/:id', Auth.validaAcesso, async (req, res) => {
    try {
        let { nome, tipo, contato } = req.body;
        let id = req.params.id;
        if (id && nome && tipo && contato) {
            let obj = await AgendaModel.update(id, nome, tipo, contato);
            if (obj) {
                res.json({ obj: obj });
            } else {
                res.status(400).json({ mensagem: "O ID informado não foi encontrado" });
            }
        } else {
            res.status(400).json({ mensagem: "Falha ao alterar o novo registro na agenda" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: `Erro interno do servidor: ${error.message}` });
    }
});

router.delete('/:id', Auth.validaAcesso, async (req, res) => {
    try {
        let id = req.params.id;
        if (id && await AgendaModel.delete(id)) {
            res.json({ mensagem: "Elemento excluído com sucesso" });
        } else {
            res.status(404).json({ mensagem: "O ID informado não foi encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: `Erro interno do servidor: ${error.message}` });
    }
});

module.exports = router;