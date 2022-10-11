
exports.documentExists = async (collectionName, conditions ) => {
        return await collectionName.findOne(conditions)
}