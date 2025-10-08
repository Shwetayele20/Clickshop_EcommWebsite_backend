const {DataTypes} = require('sequelize');
const sequelize = require ('../config/db');

const Address = sequelize.define('Address' , {
    addrId:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    userId :{
        type : DataTypes.INTEGER,
        references : {
            model : 'users',
            key :'userId',
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE'
        }
    },
    street:{
        type : DataTypes.STRING(150),
        allowNull : true,
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
        type : DataTypes.STRING(6),
        allowNull : false,
        validate : {notEmpty:true , isNumeric : true , len :[6,6]},
    },
    country:{
        type : DataTypes.STRING(100),
        allowNull : false,
        validate :{notEmpty : true}
    },
    phoneNo :{
        type : DataTypes.STRING(15),
        allowNull : false,
        validate : {notEmpty : true , isNumeric : true , len:[10,15]}
    }
})
module.exports = Address;