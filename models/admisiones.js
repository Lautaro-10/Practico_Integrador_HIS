'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admisiones extends Model {
    static associate(models) {
      Admisiones.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });
    }
  }
  
  Admisiones.init({
    fecha: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    motivo: DataTypes.STRING,
    pacienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Admisiones',
    timestamps: false
  });
  return Admisiones;
};