
exports.addDocument = async (collectionName, documentObject ) => {
    return await collectionName.create(documentObject, function(err, res){
        // if(err){
        //     console.log("some error occured while saving the file")
        // } else{
        //     console.log("from addDocument : ", res)
        // }
    })
}