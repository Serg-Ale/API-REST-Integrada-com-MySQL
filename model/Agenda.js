const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/bd");

const AgendaModel = sequelize.define('Agenda',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipo: DataTypes.STRING,
        nome: DataTypes.STRING,
        contato: {
            type: DataTypes.STRING,
            unique: true
        }
    });

async function listByField(fieldName, value) {
    try {
        const result = await AgendaModel.findAll({
            where: {
                [fieldName]: {
                    [Op.like]: '%' + value + '%'
                }
            }
        });
        return result;
    } catch (error) {
        throw new Error(`Erro ao listar por campo: ${error.message}`);
    }
}

module.exports = {
    save: async function (nome, tipo, contato) {
        const obj = await AgendaModel.create({ nome, tipo, contato });
        return obj;
    },
    update: async function (id, nome, tipo, contato) {
        return await AgendaModel.update({ nome, tipo, contato }, { where: { id } });
    },
    list: async function () {
        return await AgendaModel.findAll();
    },
    delete: async function (id) {
        return await AgendaModel.destroy({ where: { id } });
    },
    listByName: async function (nome) {
        return await listByField("nome", nome);
    },
    listByTipo: async function (tipo) {
        return await listByField("tipo", tipo);
    },
    getElementById: async function (id) {
        return await AgendaModel.findByPk(id);
    },
    Model: AgendaModel
}