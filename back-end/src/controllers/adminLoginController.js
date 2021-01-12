async function adminLoginController(req, res){
  const jwt = require("jsonwebtoken")
  const adminVerification = require("../models/adminVerification")
  const { adminValuesValidator: valuesValidator } = require("../schemes/valuesValidatorScheme")
  const { body: values } = req
  console.log(values)
  if (!await valuesValidator.isValid(values)) return res.status(400).send({"okay": "false", "message": "Invalid form"})

  // Retorna um array que pode ter Um ou DOIS elementos, dependendo do resultado.
  // Se as credenciais estiverem certas será retornado um array com os valores [true, id_usuario] 
  // Se não será retornado apenas [false]
  let verificationResult = await adminVerification(values)
  if( !await verificationResult[0] ) return res.status(400).send({"okay": "false", "message": "Invalid user"})

  let token = jwt.sign({admin: "not"}, process.env.TOKEN_SECRET, {expiresIn: 30 * 1 * 60})

  return res.send({"okay": "true", "message": "Successfully logged in", "token": token})
}

module.exports = adminLoginController