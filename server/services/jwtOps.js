const { createSigner, createVerifier } = require('fast-jwt')
const jwtSecret = process.env.JWT_SECRET

exports.createJwt = async(userObject) =>  {
    const signWithPromise = createSigner({ key: async () => jwtSecret,
                                           expiresIn: 30000000
                                            })
  
    const token = await signWithPromise(userObject)
    return token; 
}

exports.verifyJwt = async(token , userObject) =>  {
    try{
        const verifyWithPromise = createVerifier({ key: async () => jwtSecret
        })
        const payload = await verifyWithPromise(token)

        return payload.email === userObject.email
    } catch(err){
        return false;
    }
    
}