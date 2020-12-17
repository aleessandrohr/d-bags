const yup = require("yup")

const bagsValuesValidator = yup.object().shape({
  reference: yup.string().required(),
  type: yup.string().required(),
  handle_type: yup.string().required(),
  dimension: yup.string().required(),
  // img_path: yup.string().required(),
  retail_price: yup.number().integer().positive().required(),
  wholesale_price: yup.number().integer().positive().required(),
  quantity_wholesale_price: yup.number().integer().positive().required(),
  available_quantity: yup.number().integer().positive().required(),
  // creation_date: yup.string().required()
})

module.exports = { bagsValuesValidator }