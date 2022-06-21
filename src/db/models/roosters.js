module.exports = (sequelize, DataTypes) => {
    const roosters = sequelize.define(
        "roosters",
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            color: DataTypes.STRING,
            initials: DataTypes.STRING,
            feather: DataTypes.STRING,
            crest: DataTypes.STRING,
            fecha: DataTypes.STRING,
            estado: DataTypes.STRING,
            mother_id: DataTypes.INTEGER,
            mother_color: DataTypes.STRING,
            mother_initials: DataTypes.STRING,
            mother_mother_id: DataTypes.INTEGER,
            mother_mother_initials: DataTypes.STRING,
            mother_father_id: DataTypes.INTEGER,
            mother_father_initials: DataTypes.STRING,
            father_id: DataTypes.INTEGER,
            father_color: DataTypes.STRING,
            father_initials: DataTypes.STRING,
            father_mother_id: DataTypes.INTEGER,
            father_mother_initials: DataTypes.STRING,
            father_father_id: DataTypes.INTEGER,
            father_father_initials: DataTypes.STRING,
            notes: DataTypes.TEXT
        },
        { underscored: true, timestamps: false }
    );

    return roosters;
};
