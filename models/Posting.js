const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Posting extends Model {}

Posting.init(
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
    posting_url: {
      type: DataTypes.INTEGER,
      references: {
        model: "Posting",
        key: "id",
      },
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelname: "Posting",
  }
);

module.exports = Posting;
