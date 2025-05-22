const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        url: {
          type: DataTypes.VIRTUAL,
          get() {
            const baseUrl = process.env.NODE_ENV === 'production' 
              ? process.env.VERCEL_URL || 'https://devburger-api-three.vercel.app' 
              : 'http://localhost:3001';
            return `${baseUrl}/category-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

module.exports = Category;
