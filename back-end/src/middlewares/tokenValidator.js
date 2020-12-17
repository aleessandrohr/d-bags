module.exports = (req, res, next) => {
  if (req.body.token != "123456789") res.status(401).send({"okay": "false", "message": "Token invalido"})
  next()
}