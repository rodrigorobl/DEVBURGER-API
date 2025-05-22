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
            const baseUrl = process.env.NODE_ENV === 'production' 
              ? process.env.VERCEL_URL || 'https://devburger-api-three.vercel.app' 
              : 'http://localhost:3001';
            return `${baseUrl}/product-file/${this.path}`;
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
