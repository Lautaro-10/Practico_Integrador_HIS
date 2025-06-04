'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {
  Paciente.hasMany(models.Admisiones, { foreignKey: 'pacienteId' });
    }
  }
  
  Paciente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paciente',
    timestamps: false
  });
  return Paciente;
};