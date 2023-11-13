const PostCategorySchema = (sequelize, DataTypes) => {

  const PostCategoryTable = sequelize.define(
    'PostCategory',
    {
      postId: DataTypes.INTEGER,


      categoryId: DataTypes.INTEGER,


    },

    {
      timestamps: false,


      underscored: true,


      tableName: 'posts_categories',
    }
  );

  PostCategoryTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',


      otherKey: 'categoryId',


      as: 'categories',


      through: PostCategoryTable,
    });

    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',


      otherKey: 'postId',


      as: 'blogpost',

      
      through: PostCategoryTable,
    });
  };
  return PostCategoryTable;
};
module.exports = PostCategorySchema;
