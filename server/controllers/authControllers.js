const User = require('../models/user')
const {documentExists} = require('../services/documentExists')
const {addDocument} = require('../services/addDocument.js')

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
        userObject.password = password;
        await addDocument(User, userObject)
        responseObject = {...userObject, message: "Registered new User"}
        res.status(200).send(responseObject);
    }    
}

exports.signin = async (req, res) => {
    let responseObject = {};

    userEmail = req.body.email;
    password = req.body.password;

    userExists = await documentExists(User, {email: userEmail})
    passwordMatch = await documentExists(User, {email: userEmail, password: password})

    if(!userExists){
        responseObject.message = "No User Found"
    } else{
        if(passwordMatch){
            responseObject.message = "You can Sign In"
        } else{
            responseObject.message = "Email/Password wrong"
            
        }
    }
    res.status(200).send(responseObject);
}

exports.signout = (req, res) => {
    res.send("this is the signOutController");
}

exports.isSignedIn = (req, res) => {
    res.send("this is the isSignInController");
}

