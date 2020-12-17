const express = require("express")
const routes = express.Router()
const path = require("path")
const bodyParser = require("body-parser")

const upload = require("../middlewares/multer")

const routeInserBags = require("../controllers/routeInsertBags")
const { dirname } = require("path")

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

routes.use("/restrict/imgs/bags/", express.static(path.resolve(__dirname, "..", "..", "img", "bags")))

// routes.get("/restrict/imgs/bags/", )
routes.post("/restrict/insert/bags", upload.array('file', 4), routeInserBags)

routes.get("/", (req, res) => {
  console.log("Alguém passou por aqui!")
  return res.send({"message": "Hello World!"})
})

module.exports = routes