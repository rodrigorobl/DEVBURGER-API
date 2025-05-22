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
            return `https://devburger-api-jyne.vercel.app/category-file/${this.path}`;
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
