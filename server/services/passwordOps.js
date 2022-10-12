const bcrypt = require('bcrypt');

exports.generateHash = async(password) =>  {
    // const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, 10) //arg 10 instead of salt. 
    return hashedPassword; 
}

exports.verifyHash = async(password , hashStoredInDb) =>  {
    try{
        const isPasswordCorrect = await bcrypt.compare(password, hashStoredInDb)
        return isPasswordCorrect
    } catch(err){
        return false;
    }
    
}