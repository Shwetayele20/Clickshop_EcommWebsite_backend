const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Products = sequelize.define('Products',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement:true,
        allowNull :false
    },
    imageurl :{
        type : DataTypes.STRING,
        allowNull : true,
        validate : {isUrl : true},
        defaultValue :  'https://via.placeholder.com/150',
    },
    title:{
        type :DataTypes.STRING(100),
        allowNull: false,
        validate :{notEmpty : true}, 
    },
    description :{
        type : DataTypes.TEXT,
        allowNull : false ,
        validate:{ notEmpty:true},
    },
    category :{
        type : DataTypes.STRING(100),
        allowNull : false,
        validate : {notEmpty :true},
        defaultValue :'general',
    },
    brand :{
        type : DataTypes.STRING(100),
        allowNull : false,
        validate : {notEmpty : true},
        defaultValue : 'Generic',
    },
    price:{
        type : DataTypes.FLOAT,
        allowNull : false,
        validate :{notEmpty : true},
    },
    salePrice:{
        type :DataTypes.FLOAT,
        allowNull: true,
        validate:{min: 0 , isFloat : true },
        defaultValue : null,
    },
    stock:{
        type : DataTypes.INTEGER,
        allowNull : false,
        validate :{notEmpty: true},
        defaultValue:0,
    },
    reviews:{
        type : DataTypes.FLOAT,
        allowNull : true ,
        validate : {min:0 , max:5 , isFloat : true},
        defaultValue : null , 
    }
},{
    timestamps : true,
    tableName : 'Products'
})

module.exports = Products ;

