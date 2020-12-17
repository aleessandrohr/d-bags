const express = require("express")
const routes = express.Router()
const path = require("path")
const bodyParser = require("body-parser")

// Middlewares
const upload = require("../middlewares/multer")
const tokenValidator = require("../middlewares/tokenValidator")

// Controllers
const adminLoginController = require("../controllers/adminLoginController")
const routeInsertBagsController = require("../controllers/routeInsertBagsController")

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

routes.use("/public/imgs/bags/", express.static(path.resolve(__dirname, "..", "..", "img", "bags")))

routes.post("/restrict/login", adminLoginController)
// routes.get("/restrict/imgs/bags/", )
routes.post("/restrict/insert/bags",tokenValidator, upload.array('file', 4), routeInsertBagsController)

routes.get("/", (req, res) => {
  console.log("Alguém passou por aqui!")
  return res.send({"message": "Hello World!"})
})

module.exports = routes