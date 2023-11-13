const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    }
  );

  //verificar caso ocorra erro
  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogposts',
    });
  };
  return UserTable;
};

module.exports = UserSchema;