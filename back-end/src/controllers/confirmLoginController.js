async function confirmLogin(req, res){
  try {
    const jwt = require("jsonwebtoken")
    let decodedToken = req.body.tokenDecoded
    console.log(req.body.decodedToken)
    if (decodedToken.admin != "not") return res.status(500).send({"okay": "false", "message": "Error confirming login"})
    
    let token = jwt.sign({admin: "confirmed"}, process.env.TOKEN_SECRET, {expiresIn: 8 * 60 * 60})
    return res.send({"okay": "true", "message": "Login successfully confirmed", token})
  } catch (error) {
    console.log(error)
    return res.status(500).send({"okay": "false", "message": "Error confirming login"})
  }
}

module.exports = confirmLogin