const {roosters} = require('../models');

class RoosterRepo {

    async getRoosterById(id) {
        if (!id) return false;
        return await roosters.findOne({ where: {id} });
    }

    async getAllRoosters() {
        return await roosters.findAll();
    }

    async upsertRoosters(roostersData) {
        return await roosters.bulkCreate(roostersData,{updateOnDuplicate: [
            "color",
            "initials",
            "feather",
            "crest",
            "fecha",
            "estado",
            "mother_id",
            "mother_color",
            "mother_initials",
            "mother_mother_id",
            "mother_mother_initials",
            "mother_father_id",
            "mother_father_initials",
            "father_id",
            "father_color",
            "father_initials",
            "father_mother_id",
            "father_mother_initials",
            "father_father_id",
            "father_father_initials",
            "notes"
        ]});
    }

}

module.exports = new RoosterRepo();
