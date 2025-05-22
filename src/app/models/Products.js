const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        path: DataTypes.STRING,
        offer: DataTypes.BOOLEAN,
        url: {
          type: DataTypes.VIRTUAL,
          get() {
            return `https://devburger-api-jyne.vercel.app/product-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

module.exports = Product;
