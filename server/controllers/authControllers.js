const User = require('../models/user')
const {documentExists} = require('../services/documentExists')
const {addDocument} = require('../services/addDocument.js')
const {createJwt, verifyJwt} = require('../services/jwtOps')
const {generateHash, verifyHash} = require('../services/passwordOps')
exports.signup = async (req, res) => {
    let responseObject = {};

    userName = req.body.name;
    userEmail = req.body.email;
    password = req.body.password;

    userExists = await documentExists(User, {email: userEmail})
    
    if(userExists){
        responseObject.message = "Email Already Registered"
        res.status(200).send(responseObject);
    } else{
        let userObject = {}
        userObject.email = userEmail;
        userObject.name = userName;
        userObject.hashedPassword = await generateHash(password);
        await addDocument(User, userObject)
        responseObject = {...userObject, message: "Registered new User"}
        res.status(200).send(responseObject);
    }    
}

exports.signin = async (req, res) => {
    let responseObject = {};
    let userObject = {};

    userEmail = req.body.email;
    password = req.body.password;

    userObject.email = userEmail

    userExists = await documentExists(User, {email: userEmail})
    let passwordMatch = false;
    if(!userExists){
        responseObject.message = "No User Found"
    } else{
        passwordMatch = await verifyHash(password, userExists.hashedPassword)
        if(passwordMatch){
            responseObject.message = "You can Sign In"
            let jwtToken = await createJwt(userObject)
            responseObject.jwtToken = jwtToken
        } else{
            responseObject.message = "Email/Password wrong"
        }
    }
    res.status(200).send(responseObject);
}

exports.signout = (req, res) => {
    res.send("this is the signOutController");
}

exports.isSignedIn = async (req, res) => {
    let responseObject = {};
    let userObject = {};

    userEmail = req.body.email;
    token = req.body.jwtToken;

    userObject.email = userEmail;
    let verifiedJwt = await verifyJwt(token, userObject)

    responseObject.verifiedJwt = verifiedJwt;
    responseObject.message = "this is the isSignInController"

    res.status(200).send(responseObject);
}

