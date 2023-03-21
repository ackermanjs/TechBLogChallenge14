const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Commenting extends Model {}

Commenting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    posting_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Commenting",
        key: "id",
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelname: "Commenting",
  }
);

module.exports = Commenting;
