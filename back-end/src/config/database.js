const { options } = require("./routes")

async function connect(){
  const { Sequelize } = require("sequelize")
  const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    "postgres",
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      dialect: "postgres"
    }
  )
  return sequelize
}


async function initDatabase(){
  const { QueryTypes, DataTypes } = require("sequelize")
  let db = await connect()

  async function creatTableBags(db, name){
    try {
      const queryInterface = db.getQueryInterface()
      let { bags, feedback } = require("../schemes/tableScheme")
      let tableScheme = (name == 'bags') ? bags : feedback

      results = await queryInterface.createTable(name, tableScheme)
      console.log(`>> Tabela ${name} criada com sucesso.\n`)

    } catch (error) {
      console.log(`\n!! Houve um error ao criar a tabela ${name} !!`)
      console.log(error)
    }
  }

  try {
    // Função propria sequelize que testa a conexão com o banco de dados
    await db.authenticate({logging: false})
    console.log(">> Conexão com o banco de dados estabelecida com sucesso.\n")
  } catch (error) {
    console.log("!! Error ao conectar com o banco de dados !!")
    console.log(error)
    return 
  }
  
  // Query apra verificar se a tabela 'bags' existe
  let queryText = "SELECT EXISTS(SELECT FROM information_schema.tables WHERE table_name = 'bags' )"
  let results = await db.query(queryText, { type: QueryTypes.SELECT, logging: false })

  // Se NÃO existir, criarar
  if (!results[0].exists) {
    console.log("!! Tabela 'bags' não existe, será criada agora !!")
    await creatTableBags(db, 'bags')
  }

  // Query apra verificar se a tabela 'feedbacks' existe
  queryText = "SELECT EXISTS(SELECT FROM information_schema.tables WHERE table_name = 'feedbacks' )"
  results = await db.query(queryText, { type: QueryTypes.SELECT, logging: false })

  if (!results[0].exists) {
    console.log("!! Tabela 'feedbacks' não existe, será criada agora !!")
    await creatTableBags(db, 'feedbacks')
  }
}
module.exports = { connect, initDatabase }