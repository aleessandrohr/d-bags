module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
  const jwt = require("jsonwebtoken")

  try {
    if (!authHeader) return res.status(401).send({"okay": "false", "message": "No token provided"})
    
    // Verificar se é o formato de um token valido
    let parts = authHeader.split(' ')
    if (!parts.length === 2) return res.status(401).send({"okay": "false", "message": "Token error"})
    const [scheme, token] = parts
    if (!/^Bearer$/i.test(scheme)) return res.status(401).send({"okay": "false", "message": "Token error"})
    
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(401).send({"okay": "false", "message": "Token invalid"})
      req.userId = decoded.id
      return next()
    })
  } catch (error) {
    console.log("!! Erro ao verificar o token !!")
    return res.status(500).send({"okay": "false", "message": "Internal error"})
  }
}