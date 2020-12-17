const { DataTypes } = require("sequelize")

const bags = {
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reference: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  type: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  handle_type: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  dimension: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  img_path: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  retail_price: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wholesale_price: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity_wholesale_price: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  available_quantity: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  creation_date: { 
    type: DataTypes.DATE,
    allowNull: false
  },
}

// Create table bags ( id serial primary key, 
// 				   	reference varchar(255) not null, 
//            type varchar(255) not null,
//            handle_type varchar(255) not null,
//            dimension varchar(255) not null,
// 				   	img_path varchar(255) not null, 
// 				   	retail_price varchar(255) not null, 
// 				   	wholesale_price varchar(255) not null,
// 				   	quantity_wholesale_price int not null,
// 				   	available_quantity int not null,
// 				   	creation_date date not null
// 				  )

const feedback = {
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  feedback_text: { 
    type: DataTypes.STRING,
    allowNull: false
  },
}

// create table feedbacks ( id serial not null, 
// 					   	name varchar(255) not null, 
// 					   	email varchar(255) not null, 
// 					   	feedback_text varchar(255) not null
// 					  )


module.exports = { bags, feedback }