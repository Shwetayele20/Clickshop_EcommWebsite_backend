const {DataTypes} = require('sequelize');
const sequelize = require ('../config/db');

const Address = sequelize.define('Address' , {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    userId :{
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'users',
            key :'id',
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE'
        }
    },
    street:{
        type : DataTypes.STRING(150),
        allowNull : false,
        validate:{notEmpty : true }
    },
    city:{
        type: DataTypes.STRING(100),
        allowNull : false,
        validate : {notEmpty : true}
    },
    state:{
        type : DataTypes.STRING(100),
        allowNull : false,
        validate : {notEmpty : true}
    },
    pincode:{
        type : DataTypes.INTEGER(6),
        allowNull : false,
        validate : {notEmpty:true , isNumeric : true , len :[6,6]},

    },
    country:{
        type : DataTypes.STRING(100),
        allowNull : false,
        validate :{notEmpty : true}
    },
    phoneNo :{
        type : DataTypes.INTEGER(10),
        allowNull : false,
        validate : {notEmpty : true , isNumeric : true , len:[10,10]}
    }
})
module.exports = Address