
exports.signup = (req, res) => {
    let responseObject = {};

    userName = req.body.name;
    userEmail = req.body.email;
    password = req.body.password;



    responseObject.name = req.body.name
    responseObject.message = "this is the signUpController"
    res.status(200).send(responseObject);
    console.log(req.body)
}

exports.signin = (req, res) => {
    res.send("this is the signInController");
}

exports.signout = (req, res) => {
    res.send("this is the signOutController");
}

exports.isSignedIn = (req, res) => {
    res.send("this is the isSignInController");
}

