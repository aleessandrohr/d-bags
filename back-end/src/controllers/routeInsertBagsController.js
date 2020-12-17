async function routeInserBags(req, res){
  const fs = require("fs")
  const path = require("path")
  const insertBags = require("../models/insertBags")
  
  let { files, body: values } = req
  
  console.log("Passou aqui")
  console.log(files.length)
  // console.log(values)

  // Função para deletar as imagens indeseajdas
  function deleteImg(files){
    files.map(file => {
      let path_img = path.resolve(__dirname, "..", "..", "img", "bags", file.filename)
      fs.unlink(path_img, err => { 
        if (err){
          console.log(`!! Error ao apagar a imagem ${file.filename} !! `)
          console.log(err)
        }
      })
    })
  }
  
  const { bagsValuesValidator } = require("../schemes/valuesValidatorScheme")
  if(!await bagsValuesValidator.isValid(values)) {
    deleteImg(files)
    return res.status(400).send({"okay": "false", "msg": "Invalid form!"})
  }
  
  // Função para checar os nomes da imagem
  async function checkImage(files){
    // É preciso ter no maximo é no mínimo 3 imagens
    if (files.length != 3)  {
      deleteImg(files)
      return false
    } 
    // Armazenar os nomes das imagens
    let nameFiles = files.map(file => {
      let part_filename = file.filename.split("_")
      console.log(part_filename)
      return part_filename[0]
    })
    // Verificar se alguma imagem possui o algum nome invalido
    // Se possuir, chama a função para deletalas
    if(nameFiles.indexOf('undefined') > -1  || nameFiles.indexOf("") > -1  || nameFiles.indexOf("null") > -1) {
      deleteImg(files)
      return false
    }  
    return true
  }
  if (!await checkImage(files)) return res.status(400).send({"okay": "false", "msg": "Invalid form!"})
  
  let imagePaths = files.map(file => file.path) // Retonar os "paths" da imagem
  // Retorna uma string com os "paths" concatenado e separado por ;(ponto e virgula)
  imagePathsConcatenated = imagePaths.reduce((concat, file) => concat += ";"+file)
  // console.log("Paths: ", imagePathsConcatenated)

  let date = new Date()
  values.img_path = imagePathsConcatenated
  values.creation_date = date
 
  console.log(values)
  // if (!await insertBags(values)) return res.status(500).send({"okay": "false", "msg": "Internal error!"})

  return res.send({"okay": "true", "msg": "Successfully register!"})
} 
module.exports = routeInserBags