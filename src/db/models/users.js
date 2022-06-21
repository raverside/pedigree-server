module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        "users",
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            username: {type: DataTypes.STRING, unique: true},
            password: {type:DataTypes.STRING}
        },
        { underscored: true, timestamps: false }
    );

    return users;
};
